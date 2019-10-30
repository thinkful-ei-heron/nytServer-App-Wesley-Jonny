const sort = require('../index');
const expect = require('chai').expect;

describe('Testing Suite', ()=>{

  it('This is to test expected Results', ()=>{
    const testArr = [1,9,3,5];
    const expectedArr = [9,5,3,1];

    expect(sort(testArr)).to.eql(expectedArr);
  });
});