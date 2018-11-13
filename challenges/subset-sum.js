/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// function subsetSum(array, target) {
//   if (array.length === 0) return false;

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] + array[j] === target && i !== j) { return true }
//     }
//   }
//   return false
// }

let arr = [3, 7, 4, 2]
let n = 5

function subsetSum(arr, n) {
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const difference = n - num;
    if (lookup[difference]) return true;
    console.log(lookup)
    lookup[num] = true;
  }

  return false;
}

console.log(subsetSum(arr, n))
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
// console.log(subsetSum([8, 2, 4, 12], 13))
// console.log(subsetSum([8, -2, 1, -3], 6))

module.exports = subsetSum;
