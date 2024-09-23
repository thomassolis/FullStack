const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!'); // Mensaje simple en la raíz
});

// Ruta para obtener datos
app.get('/api/data', (req, res) => {
  const data = {
    message: '¡Hola desde el backend!',
    user: 'John Doe',
    age: 30
  };
  res.json(data);
});

app.get('/probando', (req, res)=>{
    const data2 = {
        nombre: 'Thomas',
        apellido: 'Solis',
        edad: 22
    }
    res.json(data2);
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
