const request = require('supertest')
const app = require('../index')
const { sequelize } = require('../database/config'); 


describe('POST /api/box/create', () => {


  test('Debe crear un documento y retornar un 201', async () => {
    const newBox = {
        numero: '123',
        estado: 'abierta',
        fecha_apertura: new Date(), 
        id_sucursal: 1,
        nombre_sucursal: 'SucursalCentro',
      };
  
      const response = await request(app)
        .post('/api/box/create')
        .send(newBox);
  
    expect(response.statusCode).toBe(201);
  });
});


afterAll(async () => {
    await sequelize.close(); 
  });