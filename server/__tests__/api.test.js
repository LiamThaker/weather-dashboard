const app = require("../app");
const supertest = require('supertest');
const request = supertest(app);

it('GET /api/test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const response = await request.get('/api/test');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
    done();
})

it('GET /api/weather?address=galway', async done => {
    // Sends GET Request to //api/weather?address=galway endpoint
    const response = await request.get('/api/weather?address=galway');
    expect(response.status).toBe(200);
    // api.openweathermap.org will return 'Galway'
    expect(response.body.name).toBe('Galway');
    done();
})

it('GET /api/weather?address=blob', async done => {
    // Sends GET Request to //api/weather?address=galway endpoint
    const response = await request.get('/api/weather?address=blob');
    expect(response.status).toBe(200);
    // api will return error city not found
    expect(response.body.code).toBe("404");
    expect(response.body.error).toBe('city not found');
    done();
})

it('GET /api/weather?address=', async done => {
    // Sends GET Request to //api/weather?address=galway endpoint
    const response = await request.get('/api/weather?address=');
    expect(response.status).toBe(200);
    // api will return message
    expect(response.body.error).toBe('You must enter address in search text box');
    done();
})

it('GET /api/blahblahblah', async done => {
    // Sends GET Request to fake endpoint
    const response = await request.get('/api/blahblahblah');
    expect(response.status).toBe(404);
    done();
})
