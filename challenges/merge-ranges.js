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

console.log('Hello from merge-ranges.js');

var times = [[1, 3], [2, 5], [7,8]];

function mergeRanges(array) {
  let collector = [];
  let { length } = array;

  for (let i = 0; i < length-1; i+=1) {
    let condensed = [];
    let currArr = array[i];
    let nextArr = array[i+1];

    if (length % 2 === 1 && i === 0) {
      collector.push(currArr);
      continue;
    }

    condensed.push(currArr[0]);
    condensed.push(nextArr[1]);
    collector.push(condensed);
  }
  return collector;
}

console.log(mergeRanges(times));

module.exports = mergeRanges;
