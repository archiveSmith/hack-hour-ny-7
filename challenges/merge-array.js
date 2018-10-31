/**
 * We have our lists of orders sorted numerically already, in arrays.
<<<<<<< HEAD
 * Write a function to merge our arrays of orders into one sorted array.
=======
 * Write a functin to merge our arrays of orders into one sorted array.
>>>>>>> 4fdabb244ae8827621271dcc2c64f1118a524654
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
<<<<<<< HEAD
// console.log([].length);
function mergeArrays(arr1, arr2) {
  let sortedArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] < arr2[0] ? sortedArr.push(arr1.shift()) : sortedArr.push(arr2.shift())
  }
  arr1.length === 0 ? sortedArr.push(...arr2) : sortedArr.push(...arr1);
  return sortedArr;
=======

function mergeArrays(arr1, arr2) {

>>>>>>> 4fdabb244ae8827621271dcc2c64f1118a524654
}

module.exports = mergeArrays;
