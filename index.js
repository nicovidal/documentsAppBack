const { dbConnection } = require('./database/config')
const app=require('./routes/prueba')


require('dotenv').config();



dbConnection();

app.listen(3000)

console.log('Server ok  ')