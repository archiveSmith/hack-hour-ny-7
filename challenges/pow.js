/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

pow = (base, power) => {
  let product = 1;
  let absPower = Math.abs(power)
  while (absPower--) {
    product *= base;
  }
  return power > 0 ? product : 1 / product;

  // let product = 1;
  // for (let i = 1; i <= Math.abs(power); i++){
  //   product = product * base;
  // }
  // if (power < 0) {
  //   return 1 / product;
  // } else {
  //   return product;
  // }

  // return power === 0 ? 1 : base * pow(base, --power);
  // return power === 0 ? 1 : base * pow(base, power - 1);
}

module.exports = pow;
