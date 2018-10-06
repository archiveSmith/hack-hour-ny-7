/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let product = 1;
  for (let i = 1; i <= Math.abs(power); i++) {
    product = product * base;
  }
  if (power < 0) {
    return 1 / product;
  } else {
    return product;
  }
}

module.exports = pow;
