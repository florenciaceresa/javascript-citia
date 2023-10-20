const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware para analizar los datos del formulario

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulario.html'); // Envia el formulario HTML al cliente
});

app.post('/procesar', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log('Nombre de usuario:', username);
  console.log('Contraseña:', password);
  res.send('Datos recibidos y registrados en la consola.');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});