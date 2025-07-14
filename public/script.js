document.getElementById('qrForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;
    
    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            throw new Error('Errore nella generazione del QR code');
        }

        const svgData = await response.text();
        document.getElementById('qrResult').innerHTML = svgData;
        document.getElementById('downloadButtons').classList.remove('hidden');
    } catch (error) {
        alert('Errore: ' + error.message);
    }
});

document.getElementById('downloadPng').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;
    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, url);
    const pngUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'qrcode.png';
    link.click();
});

document.getElementById('downloadSvg').addEventListener('click', () => {
    const svg = document.querySelector('#qrResult svg');
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svg)], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = svgUrl;
    link.download = 'qrcode.svg';
    link.click();
});
