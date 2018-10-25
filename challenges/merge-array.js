/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  let output = [];
  let one = arr1.slice();
  let two = arr2.slice();

  while (one.length > 0 || two.length > 0) {
    if (one[0] && two[0] && one[0] <= two[0]) {
      output.push(one.shift());    
    } else if (two[0]) {
      output.push(two.shift());
    } else if (one[0]) {
      output.push(one.shift());
    } else {
      output.push(two.shift());
    }
  }

  return output;
}

// var my_array = [3,4,6,10,11,15,21, 22, 44];
// var another_array = [1,5,8,12,14,19];
// console.log(mergeArrays(my_array, another_array))

module.exports = mergeArrays;
