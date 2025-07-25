require('dotenv').config();
const express = require('express');
const QRCode = require('qrcode');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware di logging per il debug
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Servi i file statici dell'applicazione React dalla build
app.use(express.static(path.join(__dirname, 'public/dist')));

// Servi le altre risorse statiche che non sono nella build
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Endpoint per il controllo di salute
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now()
    });
});

// API endpoint per generare QR code
app.post('/generate', async (req, res) => {
    const url = req.body.url;
    if (!url) {
        return res.status(400).send('URL non fornito');
    }
    try {
        new URL(url); // URL validation
        const qrSvg = await QRCode.toString(url, { type: 'svg' });
        res.send(qrSvg);
    } catch (err) {
        res.status(400).send('URL non valido');
    }
});

// Controlla se esiste index.html nella build
const distIndexPath = path.join(__dirname, 'public/dist/index.html');
const fs = require('fs');

// Per tutte le richieste che non corrispondono alle API, servi l'app React
app.get('*', (req, res) => {
    // Verifica se esiste il file index.html nella build
    if (fs.existsSync(distIndexPath)) {
        res.sendFile(distIndexPath);
    } else {
        // Se non esiste ancora la build, invia un messaggio di errore
        res.status(404).send('Applicazione non ancora compilata. Esegui "npm run build" prima di avviare il server.');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server attivo su 0.0.0.0:${port}`);
});
