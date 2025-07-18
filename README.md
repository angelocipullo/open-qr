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
4. Deploy dell'applicazione utilizzando l'archivio tar (metodo consigliato):

```bash
npm run caprover:deploy
```

Questo comando creerà un archivio tar con tutti i file necessari ed eseguirà il deploy sul tuo server CapRover.

Nota: Se incontri problemi, puoi sempre utilizzare l'interfaccia web di CapRover per caricare manualmente l'archivio tar generato da:

```bash
tar -czf ./deploy.tar.gz --exclude='node_modules' --exclude='.git' --exclude='frontend/node_modules' --exclude='frontend/dist' .
```

### Variabili d'ambiente

- `PORT`: La porta su cui il server ascolterà (default: 3000)
- `NODE_ENV`: L'ambiente di esecuzione (development/production)

### Risoluzione problemi comuni

Se incontri l'errore 502 Bad Gateway quando accedi all'applicazione in CapRover:

1. Verifica che la porta configurata nell'applicazione CapRover corrisponda a quella esposta nel Dockerfile (3000)
2. Controlla i log del container per errori
3. Verifica che l'applicazione sia in ascolto su tutti gli indirizzi (0.0.0.0) e non solo su localhost
4. Controlla l'endpoint di health dell'applicazione visitando `/health`
5. Assicurati che le variabili d'ambiente siano configurate correttamente in CapRover

Se l'applicazione è attiva ma restituisce una pagina bianca o errori 404:
1. Verifica che i file statici del frontend siano stati correttamente copiati in `/app/public/dist`
2. Controlla i percorsi base in `vite.config.js`
3. Verifica che il server Express sia configurato per servire correttamente il file index.html

## Licenza

ISC
