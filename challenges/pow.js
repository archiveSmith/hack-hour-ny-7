/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power < 0) return undefined;
  if (power === 0) return 1;
  if (power === 1) return base;

  let count = 1;
  let total = base;
  
  function calculate(current) {
    console.log('calc running');
    total = current * base;
    console.log(total);
    count++;
    if (count < power) {
       return calculate(total);
    }
  }
  return calculate(total);
}

module.exports = pow;
