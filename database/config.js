const { Pool } = require('pg');


const pool = new Pool({
  user: process.env.DB_USER,        
  host: process.env.DB_HOST,        
  database: process.env.DB_NAME,     
  password:process.env.DB_PASSWORD,  
  port:process.env.DB_PORT,  
});

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_PORT:', process.env.DB_PORT);

const dbConnection = async () => {
  try {

    await pool.query('SELECT NOW()');
    console.log('Base de datos conectada correctamente');
  } catch (error) {
    console.error('Error al conectar a la base de datosS:', error);
    throw new Error('Error al iniciar la base de datos');
  }
};

module.exports = {
  dbConnection,
  pool

};