const request = require('supertest')
const app = require('../index')
const { sequelize } = require('../database/config'); 


describe('GET /api/documents/get', () => {
  test('Debe retornar un 200 y una lista de documentos', async () => {
    const response = await request(app).get('/api/documents/get').send();
    expect(response.statusCode).toBe(200);
  });
});


describe('POST /create', () => {
  test('Debe crear un documento y retornar un 201', async () => {
    const newDocument = {
      name: 'Documento de prueba',
    };
    const response = await request(app).post('/api/documents/create').send(newDocument);
    expect(response.statusCode).toBe(201);

  });
});
 
afterAll(async () => {
  await sequelize.close(); // Cierra la conexión con Sequelize
});