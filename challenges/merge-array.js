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
  let index1 = 0;
  let index2 = 0;
  let result = [];
  while(arr1[index1] && arr2[index2]) {
    if(arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }
  arr1[index1] ? result = result.concat(arr1.slice(index1)) : result = result.concat(arr2.slice(index2));
  return result;
}

module.exports = mergeArrays;
