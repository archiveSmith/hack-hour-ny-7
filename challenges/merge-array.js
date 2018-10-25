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
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let arrFirstIdx = 0;
    let arrSecondIdx = 0;
    let mergedArr = [];
    let longest = 0;
  
    (arr1Len > arr2Len) ? longest = arr1Len : longest = arr2Len;
  
    for (let i = 0; i < longest; i++) {
      if (arr1[arrFirstIdx] < arr2[arrSecondIdx]) {
        mergedArr.push(arr1[arrFirstIdx])
        arrFirstIdx++
      } else {
        mergedArr.push(arr2[arrSecondIdx])
        arrSecondIdx++
      }
    }
  
    return mergedArr.concat(arr1.slice(arrFirstIdx)).concat(arr2.slice(arrSecondIdx))
  }

module.exports = mergeArrays;
