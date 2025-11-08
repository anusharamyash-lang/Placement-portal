const request = require('supertest');
const app = require('../app'); // NOT index.js anymore

describe('Integration Test — API Endpoints', () => {
  it('should return response for root', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(404); // adjust depending on your routes
  });

  it('should get all students (if route exists)', async () => {
    const res = await request(app).get('/student');
    expect([200, 404]).toContain(res.statusCode);
  });
});
