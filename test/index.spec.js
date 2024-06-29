let request = require('supertest');
let app = require('../src/app');

describe('GET /', () => {
  it('should return Hola Mundo', (done) => {
    request(app)
      .get('/')
      .expect('Hola Mundo', done);
  });
});
