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

// first order them by the first value in the subarray
// [ [0, 1], [3, 5], [4, 8], [9, 10], [10, 12] ]
// [0, 1] [3, 5], [4, 10] [3, 8]
// if the second number in the subarray is less than the first in the next subarray, then leave it.
// Otherwise (greater than or equal to) join the arrays and make the new second number, the greater of the old two second numbers.

function mergeRanges(array) {
  let finalArr = [];
  let sortedArr = array.sort(function(a, b) {
    return a[0] - b[0];
  });
  for (let i = 0; i <= sortedArr.length; i++) {
    if (sortedArr[i + 1]) {
      if (sortedArr[i][1] < sortedArr[i + 1][0]) {
        finalArr.push(sortedArr[i]);
      } else if (sortedArr[i][1] >= sortedArr[i + 1][0]) {
        if (sortedArr[i][1] > sortedArr[i + 1][1]) {
          sortedArr.splice(i + 1, 1);
          finalArr.push(sortedArr[i]);
        } else if (sortedArr[i][1] < sortedArr[i + 1][1]) {
          sortedArr[i].splice(1, 1);
          sortedArr[i + 1].splice(0, 1);
          finalArr.push(sortedArr[i].concat(sortedArr[i + 1]));
        }
      }
    }
  }
  return finalArr;
}

module.exports = mergeRanges;
