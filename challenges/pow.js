/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let product=1;
  let count = 0;
  
  while (count !== power) {
    product = base*product;
    count++;
  }
  return product; 
}

module.exports = pow;
