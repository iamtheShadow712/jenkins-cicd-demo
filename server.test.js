const app = require('./server')
const request = require('supertest')


describe("API Tests", () => {

    test("GET /api/users should return users list", async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data.length).toBe(2);
    })

    test("GET / Should return welcome message", async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message', "API is working");
    })

})