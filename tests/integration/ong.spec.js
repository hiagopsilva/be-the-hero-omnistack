const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
  it('should be able to create a new ONG', async () => {
    const resposne = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
        contato: "contato",
        whatsapp: "4700000000",
        city: "São Paulo0",
        uf: "SC"
      });

    console.log(response.body);
  }); 
});