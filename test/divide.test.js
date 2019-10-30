const {divide} = require('../index');
const expect = require('chai').expect;

describe('This is a description of my test.', () => {
  it('It should divide positive integers properly.', ()=>{
    // Code here for test.
    expect(divide(8,4)).to.equal(2);
  });
  it ('This should throw an error if divided by 0', ()=>{
    // Code goes here.
    expect(()=> divide(8,0).to.throw());
  });
});
