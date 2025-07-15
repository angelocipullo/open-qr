# Open QR

Un generatore di codici QR semplice, veloce e sicuro.

## Caratteristiche

- Generazione istantanea di codici QR
- Download in formato SVG e PNG
- Interfaccia utente moderna e reattiva
- Supporto multilingua (Italiano, Inglese)

## Sviluppo locale

### Prerequisiti

- Node.js (versione 18 o superiore)
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/tuonome/open-qr.git
cd open-qr

# Installa le dipendenze del backend
npm install

# Installa le dipendenze del frontend
cd frontend
npm install
cd ..

# Avvia l'applicazione in modalità sviluppo
npm run dev            # Solo backend
npm run dev:frontend   # Solo frontend
```

### Costruire l'applicazione

```bash
npm run build          # Costruisce solo il frontend
npm run clean-build    # Pulisce la directory dist e ricostruisce il frontend
```

## Deployment con Docker

### Costruire l'immagine Docker

```bash
npm run docker:build   # Costruisce l'immagine Docker
npm run docker:run     # Esegue il container Docker
```

Oppure utilizzando Docker Compose:

```bash
npm run docker:compose  # Costruisce ed esegue con docker-compose
```

## Deployment con CapRover

### Prerequisiti

- Un server CapRover configurato
- CLI di CapRover installata (`npm install -g caprover`)

### Configurazione

1. Accedi alla dashboard di CapRover e crea una nuova applicazione (es. "open-qr")
2. Esegui il comando `caprover login` per connetterti al tuo server
3. Configura l'applicazione con `caprover setup`
4. Deploy dell'applicazione:

```bash
npm run caprover:deploy
```

Oppure manualmente:

```bash
caprover deploy -a nome-app
```

### Variabili d'ambiente

- `PORT`: La porta su cui il server ascolterà (default: 3000)
- `NODE_ENV`: L'ambiente di esecuzione (development/production)

## Licenza

ISC
