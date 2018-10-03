/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
function pow(base, power) {
  let result = 0

  if (power === 0) return 1;
  if (base === 0) return 0;

  result = base * pow(base, power -1);

  return result 
} 

module.exports = pow;
