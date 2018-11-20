/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let curMax = 0;
  let curSum;

function lessThanZero(num) {
return num < 0
}

  if (arr.every(lessThanZero)) {
    for (let i = -1; i < arr.length; i++) {
        let curArr = [];
      for (let j = i+1; j < arr.length; j++) {
          curArr.push(arr[j]);
          curSum = curArr.reduce((a,b) => a + b, 0)
          if (curSum<curMax) {
              curMax = curSum
          }
      }
    }
  }

  for (let i = -1; i < arr.length; i++) {
      let curArr = [];
    for (let j = i+1; j < arr.length; j++) {
        curArr.push(arr[j]);
        curSum = curArr.reduce((a,b) => a + b, 0)
        if (curSum>curMax) {
            curMax = curSum
        }
    }
  }
  return curMax
}

module.exports = maxSubarray;
