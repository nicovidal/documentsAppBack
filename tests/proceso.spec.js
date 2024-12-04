const request = require('supertest')
const app = require('../index')
const { sequelize } = require('../database/config'); 


describe('POST /create', () => {
    test('Debe crear un proceso y retornar un 201', async () => {
      const newProceso = {
        codigo:'ADC',
        tipo_proceso:'Aumento de cupo'
      };
      const response = await request(app).post('/api/proceso/create').send(newProceso);
      expect(response.statusCode).toBe(201);
  
    });
  });
   


afterAll(async () => {
    await sequelize.close(); 
  });