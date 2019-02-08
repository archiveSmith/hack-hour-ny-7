const { assert } = require('chai');
const { binToDec } = require('../challenges/bin-to-dec');

describe('binToDec()', () => {
  it('should convert binary numbers to decimal numbers', () => {
    assert.equal(binToDec('0'), 0);
    assert.equal(binToDec('11'), 3);
    assert.equal(binToDec('100'), 4);
    assert.equal(binToDec('101'), 5);
    assert.equal(binToDec('0101'), 5);
  });
});