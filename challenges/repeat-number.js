/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  array = array.sort((a, b) => a - b );
  let prevNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if(prevNum === array[i])  {
      return array[i]
    } else {
      prevNum = array[i];
    }
  }
}

console.log(repeatNumbers([1,2,5,3,2,8]))

module.exports = repeatNumbers;
