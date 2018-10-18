/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, newBase = base) {
    if(power === 0) return 1;
    if(power === 1) return newBase;
    newBase *= base;
    return pow(base, power - 1, newBase)
}

module.exports = pow;

console.log(pow(11,1))