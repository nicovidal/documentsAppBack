const request = require('supertest')
const app = require('../routes/prueba')

describe('GET /tasks', () => {

    test('should respond with 200 status code', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200)

    })

    test('should respond with an array', async () => {

        const response = await request(app).get('/tasks').send()
        expect(response.body).toBeInstanceOf(Array)

    })

}
)


describe('POST /tasks', () => {

    describe('given a title and description', () => {

        const newTask = {
            title: "Test task",
            description: "Test description"
        }


        //should responde with a 200 status code
        test('should respond with a 200 status code', async () => {
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.statusCode).toBe(200)
        })

        //should responde with a content-type of application/json
        test('should have a content-type: application/json in header', async () => {
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.header['content-type']).toEqual(
                expect.stringContaining("json")
            )
        })

        //should responde with a json object containing the new task with an id
        test('should respond with an task ID ', async () => {
            const response = await request(app).post("/tasks").send(/* {
                title: "test task",
                description: "test description"
            } */
                newTask
            );
            expect(response.body.id).toBeDefined()
        })
    })

    describe("when title and description is missing", () => {
        test('should respond with a 400 status code', async () => {
            const response = await request(app).post('/tasks').send({})
            expect(response.statusCode).toBe(400)

        })
    })

    describe("when title and description is missing", () => {
        test('should respond with a 400 status code', async () => {

            const fields = [
                {},
                { title: 'Test Task' },
                { description: 'Test Description' }
            ]

            for (const body of fields) {
                const response = await request(app).post('/tasks').send(body)
                expect(response.statusCode).toBe(400)
            }


        })
    })

    /*    describe("when title and description is missing",()=>{
           test('should respond with a 400 status code',async()=>{
               const response=await request(app).post('/tasks').send({description:''})
               expect(response.statusCode).toBe(400)
               
           })
       })
   
       describe("when title and description is missing",()=>{
           test('should respond with a 400 status code',async()=>{
               const response=await request(app).post('/tasks').send({title:''})
               expect(response.statusCode).toBe(400)
               
           })
       }) */

})


/* 
//should responde with a 200 status code
test('should respond with a 200 status code',async()=>{
    const response=await request(app).post('/tasks').send()
    expect(response.statusCode).toBe(200)
})

//should responde with a content-type of application/json
test('should have a content-type: application/json in header',async()=>{
    const response= await request(app).post('/tasks').send()
    expect(response.header['content-type']).toEqual(
        expect.stringContaining("json")
    )
})

//should responde with a json object containing the new task with an id
test('should respond with an task ID ',async()=>{
    const response= await request(app).post("/tasks").send({
        title:"test task",
        description:"test description"
    });
    expect(response.body.id).toBeDefined()
}) */