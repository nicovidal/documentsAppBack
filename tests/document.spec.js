const request = require('supertest')
const app = require('../routes/prueba')

describe('GET /documents',()=>{

    test('debe retonar un 200 ',async()=>{
        const response = await request()
    })


})