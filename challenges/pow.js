/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */


// function pow(base, power) {
//   let product = 1;
//   for(let i = 1; i <= power; i++) {
//     product *= base;
//   }
//   return product;
// }

function pow(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * pow(base, power - 1);
  }
}


module.exports = pow;
