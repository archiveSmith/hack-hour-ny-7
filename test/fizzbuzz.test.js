const { assert } = require('chai');
const { fizzbuzz } = require('../challenges/fizzbuzz.js');

describe('fizzbuzz()', () => {
  it('Should replace numbers divisible by 3 with fizz', () => {
    assert.deepEqual(fizzbuzz(3), [1, 2, 'fizz']);
  });

  it('Should replace numbers divisible by 5 with buzz', () => {
    assert.deepEqual(fizzbuzz(5), [1, 2, 'fizz', 4, 'buzz']);
  });

  it('Should replace numbers divisible by both 3 and 5 with fizzbuzz', () => {
    assert.deepEqual(fizzbuzz(16), [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]);
  });
}); 