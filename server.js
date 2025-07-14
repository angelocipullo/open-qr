const express = require('express');
const QRCode = require('qrcode');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

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

const port = 3000;
app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`);
});
