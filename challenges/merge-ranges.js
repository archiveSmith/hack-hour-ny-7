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
  let masterArr = [];
  array.sort((a, b) => a[0] - b[0])
  console.log(array);
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
  return masterArr;
}

module.exports = mergeRanges;
