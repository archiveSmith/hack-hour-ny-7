/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
<<<<<<< HEAD
  let masterArr = [];
  array.sort((a, b) => a[0] - b[0])
  let currentArr = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i][0] >= currentArr[0] && array[i][0] <= currentArr[1]){
      currentArr = [currentArr[0], array[i][1]];
    } else {
      masterArr.push(currentArr);
      currentArr = array[i];
    }
  }
  masterArr.push(currentArr)
=======

>>>>>>> a1a2d3d6512240ad16cfd3108e1c3e741304c812
}

module.exports = mergeRanges;
