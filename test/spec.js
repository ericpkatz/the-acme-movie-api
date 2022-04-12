const { expect } = require('chai');
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
