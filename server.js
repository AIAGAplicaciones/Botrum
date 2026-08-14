const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve los archivos estáticos de la carpeta public
app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['html'],
  maxAge: '1h'
}));

// Fallback: cualquier ruta devuelve la landing (SPA-style, por si añades rutas)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Botrum web escuchando en el puerto ${PORT}`);
});
