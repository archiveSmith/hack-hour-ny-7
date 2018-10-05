/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power < 0) {return undefined};
  if (power === 0) return 1;
  if (power === 1) return base;

  let count = 1;
  let total = base;
  
  function calculate(current) {
    total = current * base;
    count++;
    if (count < power) {
       return calculate(total);
    }
    return total;
  }
  return calculate(total);
}

// CODESMITH SOLUTION

// function pow(base, power) {
//   if (power === 0) return 1;
//   return base * pow(base, power - 1);
// }

console.log(pow(2, 3));

module.exports = pow;
