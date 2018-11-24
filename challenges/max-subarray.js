/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr) { return arr; }
  const sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j <= arr.length; j++){
      if(arr[i] === arr[j]){
        console.log(arr[i]);
        sumArr.push(arr[i] + arr[j]);
      }else{
        sumArr.push(sumArr[j - 2] + arr[j]);
      }
    }
    // console.log(`---${i}---`, sumArr);
  }

  console.log(sumArr);
  // return Math.max(...sumArr);
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));//18
// console.log(mxaxSubarray([15,20,-5,10]));//40

module.exports = maxSubarray;
