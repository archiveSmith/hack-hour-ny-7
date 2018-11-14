/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let min = Math.min(a,b);

  let gcdList = [1];
  for(let i = 2; i <= min; i ++) {
    
    if (a % i === 0 && b % i === 0) {
      console.log(i);
      gcdList.unshift(i);

      //get the highest multiple within gcd that is under min
      for (let j = 1; j < gcdList.length; j++) {
        if (gcdList[j] * i <= min){
          //add back to the list;
          gcdList.unshift(gcdList[j] * i);
          i = gcdList[j] * i;
          break;
        }
      }
    }
  }
  return gcdList[0];
}

console.log(gcd(20, 60));

module.exports = gcd;