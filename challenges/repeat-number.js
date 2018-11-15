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

 console.log('Hello from repeat-number')

let myArray = [5, 2, 3, 5, 1, 10, 9];

function repeatNumbers(array) {
  let sortedArr = array.sort(function(a, b) {
    return a - b;
  });
  
  let { length } = sortedArr;

  for (let i = 0; i < length; i+=1) {
    let cur = sortedArr[i];
    let next = sortedArr[i+1];

    if (cur === next) {
      return cur;
    }
    else {
      continue;
    }

  }

}

console.log(repeatNumbers(myArray));

module.exports = repeatNumbers;
