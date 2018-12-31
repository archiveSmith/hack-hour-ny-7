/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let greatest = 0;
  let num = a < b ? b : a;
  
  for(let i = 0; i <= num; i++){
    // console.log(i);
    if(a%i === 0 && b%i === 0){
      greatest = greatest < i ? i : greatest;
    }
  }

  return greatest;
}

// console.log(gcd(10, 5));//2
// console.log(gcd(10, 9));//1
module.exports = gcd;