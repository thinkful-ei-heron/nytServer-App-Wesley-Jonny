const {expect} = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('testing frequency function',()=>{
  const testInput = 'aaBBAAbbaa';
  const expectedOutputObject = {
    unique: 2,
    average: 5,
    highest: 'a',
    'a': 6,
    'b': 4
  };
  //accurately counts character frequency
  it('accurately counts character frequency',()=>{
    return supertest(app)
      .get('/frequency')
      .query({s:`${testInput}`})
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res=>{
        expect(res.body).to.be.an('object');
        expect(res.body).to.includes.keys('unique','average','highest');
        expect(res.body).to.eql(expectedOutputObject);
      });
  });
});