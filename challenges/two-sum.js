/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true
      }
    }
  }
  return false
}

console.log(twoSum([5, 2, 10, 1,], 8))

module.exports = twoSum;
