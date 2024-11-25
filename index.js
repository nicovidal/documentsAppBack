const { dbConnection } = require('./database/config')
const app=require('./routes/prueba')





dbConnection();

app.listen(3000)

console.log('Server ok  ')