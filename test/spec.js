const { expect } = require('chai');
const { syncAndSeed } = require('../db');
const supertest = require('supertest');
const app = supertest(require('../app'));
describe('a test', ()=> {
  it('true is equal to true', ()=> {
    expect(true).to.equal(true);

  });
});

describe('The Home Page', ()=> {
  it('exists', async()=> {
    const response = await app.get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.contain('The Acme Movies API');

  });
});

describe('/api routes', ()=> {
  beforeEach(()=> syncAndSeed());
  describe('/api/movies', ()=> {
    it('returns all the movies', async()=> {
      const response = await app.get('/api/movies');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(4);

    });
    it('allows cross origin requests', async()=> {
      const response = await app.get('/api/movies');
      console.log(response.headers);
      expect(response.status).to.equal(200);
      expect(response.headers['access-control-allow-origin']).to.be.ok;
      expect(response.headers['access-control-allow-origin']).to.equal('*');

    });
  });
});
