const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//Creando el servidor
const app = express();

//Conectar a la base de datos
connectDB();

//habilitar cors
app.use(cors());

//habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas, haciendo uso de el archivo de users para el endpoint de users
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/userlist', require('./routes/userlist'));
app.use('/deleteuser', require('./routes/deleteuser'));
app.use('/updateuser', require('./routes/updateUser'));
app.use('/task', require('./routes/tasks'));

//Arrancar la app
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
