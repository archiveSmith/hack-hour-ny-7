/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     if (curr >  max) { max = curr };
//     for (let j = i + 1; j < arr.length; j++) {
//       curr = curr + arr[j];
//       if (curr > max) { max = curr }
//     }
//   }
//   return max;
// }

function maxSubarray(arr) {
  let maxSum = -Infinity;
  let currSum = 0

  for (let i = 0; i < arr.length; i++) {
    currSum = currSum + arr[i];
    if (currSum > maxSum) maxSum = currSum;
    if (currSum < 0 && currSum < arr[i+1]) currSum = 0;
  }
  return maxSum;
}

// console.log(maxSubarray([-15, 1000, -20, -5]))

module.exports = maxSubarray;
