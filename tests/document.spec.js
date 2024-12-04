const request = require('supertest')
const app = require('../index')
const { sequelize } = require('../database/config'); 


describe('POST /api/documents/create', () => {


  test('Debe crear un documento y retornar un 201', async () => {
    const newDocument = {
      fecha: new Date(), 
      rut_cliente: '12345678-9',
      numero_tarjeta: '1234-5678-9123-4567',
      respaldo_solicitud: 'URL del archivo respaldo',
      id_caja: 1,
      id_docto: 2,
      id_estado: 1,
      numeroCaja: 'Caja001',
    };
    const response = await request(app)
      .post('/api/documents/create')
      .send(newDocument);
    expect(response.statusCode).toBe(201);
  });
});



describe('GET /api/documents/get', () => {
  test('Debe retornar un 200 y una lista de documentos', async () => {
    const response = await request(app).get('/api/documents/get').send();
    expect(response.statusCode).toBe(200);
  });
});


afterAll(async () => {
  await sequelize.close(); 
});