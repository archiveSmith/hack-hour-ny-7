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
  let obj = {}
  for (let i=0; i<array.length; i++) {
    if (obj[array[i]]) { 
      return array[i]
    } else {
      obj[array[i]] = true;
    }
  }
}

//arr = [1, 2, 2, 3, 4, 5, 6]
function repeatNumbers(array) {
  //numbers are sequential so get sum if duplicate didn't exist => sum of 1-6 =  42/2 = 21 
  var expected = ((array.length - 1) * array.length) / 2; 
  var actual = 0;
  for (var i=0; i<array.length; i++) {
    actual += array[i]; //add up everything in array
  }
  return actual - expected; //difference is the extra number
}

function repeatNumbers(array) {
  var result = 0;

  for (var i=0; i<array.length; i++) {
    result = result ^ i ^ array[i];
  }
  
  return result;
}

module.exports = repeatNumbers;
