/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let resultArr = [];
  //to enable slice to work, need one more element
  arr.push(null);

  maxSubArrRecursive(arr, 0, arr.length - 1);

  return resultArr.map(subArr => subArr.reduce((acc, cur) => acc + cur))
  .reduce((acc, cur) => {
    return acc >= cur ? acc : cur;
  });
  
  function maxSubArrRecursive (arr, leftIndex, rightIndex) {
    //add the subarray to result arr;
    let sliced = arr.slice(leftIndex, rightIndex);
    resultArr.push(sliced);

    if (leftIndex === rightIndex - 1){
      return;
    } else {
      maxSubArrRecursive(arr, leftIndex, rightIndex - 1);
      maxSubArrRecursive(arr, leftIndex + 1, rightIndex);
    }
  }
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
