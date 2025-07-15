FROM node:18-alpine AS builder

# Impostazione della directory di lavoro principale
WORKDIR /app

# Copia dei file package.json del progetto principale e del frontend
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Installazione delle dipendenze del backend
RUN npm ci

# Installazione delle dipendenze del frontend
WORKDIR /app/frontend
RUN npm ci

# Torna alla directory principale
WORKDIR /app

# Copia di tutti i file del progetto
COPY . .

# Build del frontend
WORKDIR /app/frontend
RUN npm run build

# Torna alla directory principale
WORKDIR /app

# Stage 2: Configurazione del backend
FROM node:18-alpine

# Impostazione della directory di lavoro
WORKDIR /app

# Copia dei file package.json e package-lock.json del backend
COPY package*.json ./

# Installazione delle dipendenze di produzione
RUN npm ci --only=production

# Copia del server e della cartella public dalla fase di build
COPY --from=builder /app/server.js ./
COPY --from=builder /app/public ./public

# Esposizione della porta
EXPOSE 3000

# Controllo di salute
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget -O- http://localhost:3000/health || exit 1

# Avvio dell'applicazione
CMD ["node", "server.js"]
