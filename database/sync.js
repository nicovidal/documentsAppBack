const { sequelize } = require('./database');
const Document = require('./models/Document');

(async () => {
  try {
    await sequelize.sync({ force: false }); 
    console.log('¡Tablas sincronizadas correctamente!');
  } catch (error) {
    console.error('Error al sincronizar las tablas:', error);
  } finally {
    await sequelize.close(); 
  }
})();
