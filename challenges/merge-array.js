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
  let newArray = [];
  let counterA = 0;
  let counterB = 0;

  while (arr1[counterA] || arr2[counterB]) {
    if (!arr2[counterB]) {
      newArray.push(arr1[counterA]);
      counterA++;
    } else if (arr1[counterA] <= arr2[counterB]) {
      newArray.push(arr1[counterA]);
      counterA++;
    } else {
      newArray.push(arr2[counterB]);
      counterB++;
    }
  }

  return newArray;
}

// var my_array = [3, 4, 6, 10, 11, 15, 21, 34, 56, 90];
// var another_array = [1, 5, 8, 12, 14, 19, 23, 45, 56];

// console.log(mergeArrays(my_array, another_array));
// * [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
