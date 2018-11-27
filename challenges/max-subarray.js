/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   let cache = {};
//   let maxSum = arr[0];
//   let testarr = []
//   //iterate thru each number and check if it's bigger than the maxSum
//   for (let i=0; i<arr.length; i++) { //i=2
//     let sum = arr[i] //sum= 3
//     if (sum<maxSum) break;
//     for (let j=(i+1); j<arr.length; j++) {//j=4
      
//       let sum += arr[j] //sum=9
//       if (sum<maxSum) {
//         break;
//       } else {
//         maxSum = sum; //maxSum = 13
//       }
      
      
//     }
//   }
  
// }

// function maxSubarray(arr) {
//   let cache = {};

//   for (let i=0; i<arr.length; i++) {
//     let testarr=[arr[i]]; //[15]
//     console.log(testarr)
//     for (let j=1; j<arr.length; j++) {
//       console.log(arr[j])
//       testarr.push[arr[j]];
//       console.log('hi', testarr)
//     }
//   }

//   // for (let x in cache) {
//   //   let arr = Object.values(obj);
//   //   let max = Math.max(...arr);
//   // }
// }

function maxSubarray(arr) {
  let currentMax = arr[0]; //6
  let ultimateMax = arr[0]; //6

  for (let i=1; i<arr.length; i++) {
    console.log('arr[i]', arr[i])
    console.log('currentMax+arr[i]', currentMax+arr[i], 'currentMax', currentMax)
    currentMax = Math.max(arr[i], currentMax+arr[i]); 
    console.log('currentmax', currentMax, 'ultimatemax', ultimateMax);
    ultimateMax = Math.max(currentMax, ultimateMax);
  }
  console.log('ultimateMax:', ultimateMax)
  return ultimateMax;
}

maxSubarray([6, -20, 3, 4])
//maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) // 18 // [3, 10, -4, 7, 2
//console.log(maxSubarray([15,20,-5,10]))  // 40

module.exports = maxSubarray;
