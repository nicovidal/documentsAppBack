const request = require('supertest')
const app = require('../routes/documents')

describe('GET /documents',()=>{

    test('debe retonar un 200 ',async()=>{
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200)
    })

    test('debe retonar un 404 ',async()=>{
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(404)
    })


})