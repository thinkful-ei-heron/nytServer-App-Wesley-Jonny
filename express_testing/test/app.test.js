const {expect} = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
  it('should return a message from GET /', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Express!');
  });
  it('8/4 should be 2', () => {
    return supertest(app)
      .get('/sum')
      .query({a: 8, b: 4})
      .expect(200, '8 divided by 4 is 2');
  });
  it(`should return 400 if 'a' is missing`, () => {
    return supertest(app)
      .get('/sum')
      .query({b: 4})
      .expect(400, 'Value for a is needed');
  });

  it('should generate an array of 5', () => {
    return supertest(app)
      .get('/generate') // invoke the endpoint
      .query({ n: 5 }) // send the query string ?n=5
      .expect(200)  // assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        // make sure you get an array
        expect(res.body).to.be.an('array');
        // array must not be empty
        expect(res.body).to.have.lengthOf.at.least(1);
        // this assertion fails
        expect(res.body).to.include(5);
        expect(res.body).to.include.members([1,2,3,4,5]);
        expect(res.body).to.have.members([1,2,3,4,5]);
        expect(res.body).to.be.an('array').that.have.members([1,2,3,4,5]).include(5).lengthOf(5).at.least(4);
      });
  });
});