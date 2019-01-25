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
  let newarr = arr1.concat(arr2)
  return newarr.sort((a, b) => a-b)
}

function mergeArrays(arr1, arr2) {
  let result = [];
  while (arr1.length>0 || arr2.length>0) {
    if (arr1[0]<arr2[0]) {
      result.push(arr1[0]); arr1 = arr1.slice(1);
    } else {
      result.push(arr2[0]); arr2 = arr2.slice(1);
    }
  }
  return result; 
}

//*********************************fellow solution *********************************
function mergeArrays(arr1, arr2) {
  // make new array
  let merged = [];
  let ind1 = 0, ind2 = 0;
  while (arr1[ind1] !== undefined || arr2[ind2] !== undefined) {
    if (arr1[ind1] < arr2[ind2]) {
      merged.push(arr1[ind1++]);
    } else if (arr1[ind1] >= arr2[ind2]) {
      merged.push(arr2[ind2++]);
    } else {
      merged.push(arr1[ind1++] || arr2[ind2++]);
    }
  }
  return merged;
}

let my_array = [3,4,6,10,11,15,21];
let another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
