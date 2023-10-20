const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola, express!');
});

app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: "pelota"
    },
    {
      id: 2,
      name: "guitarra"
    },
    {
      id: 3,
      name: "computadora"
    },
  ];
  res.json(products); 
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
})