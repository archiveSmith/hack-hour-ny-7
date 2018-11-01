/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */


function mergeArrays(arr1, arr2) {

  let arr1Index = 0;
  let arr2Index = 0;
  let returnArr = [];

  while (arr1Index < arr1.length && arr2Index < arr2.length){
    if(arr1[arr1Index] <= arr2[arr2Index]) {
      returnArr.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      returnArr.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  for(let i = arr1Index; i < arr1.length; i++) {
    returnArr.push(arr1[i]);
  }
  for(let i = arr2Index; i < arr2.length; i++) {
    returnArr.push(arr2[i]);
  }

  return returnArr;
}

var my_array = [1, 1, 2, 3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
