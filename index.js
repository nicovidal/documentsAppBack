const express = require('express');
require('dotenv').config();
const { dbConnection, sequelize } = require('./database/config');
const app = express();

// Modelos
const Document = require('./models/documents');
const Box = require('./models/box');

// Conectar a la base de datos
if (process.env.NODE_ENV !== 'test') {
  dbConnection();
}

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Rutas
app.use("/api/documents", require('./routes/documents'));


const startServer = async () => {
  try {
    if (process.env.NODE_ENV !== 'test') { 
      await sequelize.sync({ force: false });
      console.log('Tablas sincronizadas correctamente.');
      
      app.listen(3000, () => {
        console.log('Server OK, escuchando en el puerto 3000');
      });
    }
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};


if (process.env.NODE_ENV !== 'test') {
  startServer();
}

module.exports = app; 
