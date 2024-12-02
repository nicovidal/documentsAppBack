const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  logging: false, 
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate(); 
    console.log('¡Conexión establecida correctamente con Sequelize!');
  } catch (error) {
    console.error('Error al conectar con Sequelize:', error);
    throw new Error('No se pudo conectar a la base de datos');
  }
};

module.exports = { sequelize, dbConnection };
