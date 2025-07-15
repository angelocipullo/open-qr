FROM node:18-alpine AS frontend-builder

# Impostazione della directory di lavoro
WORKDIR /app/frontend

# Copia dei file package.json e package-lock.json
COPY ./frontend/package*.json ./

# Installazione delle dipendenze
RUN npm ci

# Copia dei file del frontend
COPY ./frontend/ ./

# Build del frontend
RUN npm run build

# Stage 2: Configurazione del backend
FROM node:18-alpine

# Impostazione della directory di lavoro
WORKDIR /app

# Copia dei file package.json e package-lock.json del backend
COPY package*.json ./

# Installazione delle dipendenze di produzione
RUN npm ci --only=production

# Copia dei file del backend
COPY ./server.js ./
COPY ./public ./public

# Copia della build del frontend dalla fase precedente
COPY --from=frontend-builder /app/frontend/dist /app/public/dist

# Esposizione della porta
EXPOSE 3000

# Avvio dell'applicazione
CMD ["node", "server.js"]
