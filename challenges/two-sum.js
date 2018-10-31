/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for(let i = 0; i < arr.length; i++) {
    for(let x = 0; x < arr.length; x++) {
      if(i !== x) {
        if(arr[i] + arr[x] === n) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = twoSum;
