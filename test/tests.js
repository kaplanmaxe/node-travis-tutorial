const chai = require('chai');
const functions = require('../functions');
const env = process.env.NODE_ENV === 'testing' ? process.env : require('./env');
const assert = chai.assert;

// Here, we will test the multiplyNums function
describe('test multiplyNums()', () => {
  it('should equal 32', done => {
    assert.strictEqual(functions.multiplyNums(8, 4), 32, '8 * 4 = 32');
    done();
  });
});

// Here we test the sayName function with the normal name and encrypted name
describe('test sayName()', () => {
  it('should say hello with name', done => {
    assert(`Hello, ${env.name}` === functions.sayName(env.name), 'Output name correctly');
    done();
  });

  it('should output encrypted name', () => {
    console.log(env.encryptedName);
    assert(`Hello, ${env.encryptedName}` === functions.sayName(env.encryptedName), 'Output encrypted name');
  });
});
