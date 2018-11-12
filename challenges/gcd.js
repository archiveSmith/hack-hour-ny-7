/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 function divisorsList(num) {
   let divisors = [];
   for (let i = 1; i < num / 2; i++) {
     if (num % i === 0) {
       if (!divisors.includes(i)){
         divisors.push(i);
         divisors.push(num / i);
       }
     }
   }
   return divisors.sort((a, b) => b - a);
 }

function gcd(a, b) {
  let smallerArr;
  let largerNum;
  if (a < b) {
    smallerArr = divisorsList(a);
    largerNum = b;
  } else {
    smallerArr = divisorsList(b);
    largerNum = a;
  }
  for (let i = 0; i < smallerArr.length; i++) {
    if (largerNum % smallerArr[i] === 0) {
      return smallerArr[i]
    }
  }
}

console.log(gcd(10, 8));

module.exports = gcd;