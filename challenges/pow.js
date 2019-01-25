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

//*********************************fellow solution *********************************
function pow(base, power) {
  if (power === 0) return 1;

  return base * pow(base, power - 1);
}

/*because there are only two cases the logic above can 
be replaced by a single ternary line as demonstrated below.*/
// function powTernary(base, power) {
//   return power === 0 ? 1 : base * pow(base, power - 1)
// }

function powTCO(base, power, number = 1) {
  if (power === 0) return number;

  return powTCO(base, power - 1, base * number);
}

module.exports = pow;
