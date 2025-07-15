FROM node:22-alpine AS builder

# Impostazione della directory di lavoro principale
WORKDIR /app

# Copia dei file package.json del progetto principale e del frontend
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Installazione delle dipendenze del backend e frontend in una sola operazione
# Utilizziamo --no-package-lock per evitare problemi con package-lock
RUN npm install --no-package-lock && \
    cd frontend && \
    npm install --no-package-lock && \
    cd ..

# Copia di tutti i file del progetto
COPY . .

# Build del frontend
WORKDIR /app/frontend
RUN npm run build

# Torna alla directory principale
WORKDIR /app

# Stage 2: Configurazione del backend
FROM node:22-alpine

# Impostazione della directory di lavoro
WORKDIR /app

# Copia dei file package.json del backend
COPY package.json ./

# Installazione delle dipendenze di produzione e wget per healthcheck
RUN apk add --no-cache wget && \
    npm install --omit=dev --no-package-lock && \
    npm cache clean --force

# Copia del server e della cartella public dalla fase di build
COPY --from=builder /app/server.js ./
COPY --from=builder /app/public ./public

# Crea un utente non root per una maggiore sicurezza
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Esposizione della porta
EXPOSE 3000

# Controllo di salute
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget -O- http://localhost:3000/health || exit 1

# Avvio dell'applicazione
CMD ["node", "server.js"]
