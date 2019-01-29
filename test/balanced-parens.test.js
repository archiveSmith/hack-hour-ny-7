const { assert } = require('chai');
const { balancedParens } = require('../challenges/balanced-parens');

describe('balancedParens()', () => {
  it('should return false if there is a single parenthesis', () => {
    assert.equal(balancedParens('('), false);
  });

  it('should return true if there is a pair of parenthesis in correct order', () => {
    assert.equal(balancedParens('()'), true);
  });

  it('should return false if the right parenthesis (")") is found first', () => {
    assert.equal(balancedParens(')('), false);
  });

  it('should return true if a nested parenthesis is found and the is balanced', () => {
    assert.equal(balancedParens('(())'), true);
  });
});