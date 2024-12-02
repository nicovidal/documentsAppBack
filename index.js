const app = require('./routes/prueba');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const { sequelize } = require('./database/config');
const Document = require('./models/documents'); 


dbConnection();

const startServer = async () => {
  try {

    await sequelize.sync({ force: false }); 
    console.log('Tablas sincronizadas correctamente.');

  
    app.listen(3000, () => {
      console.log('Server OK, escuchando en el puerto 3000');
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};


//routes
app.use("/api/documents",)

startServer();

