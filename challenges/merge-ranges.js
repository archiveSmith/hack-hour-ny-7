/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0])
  let output = [array[0]]

  for(let i = 1; i < array.length; i++) {
    const len = output.length;
    if (array[i][0] > output[len-1][0] && array[i][1] < output[len-1][1]) {
      break;
    }else if (output[len-1][0] === array[i][0]) {
      let bigger = output[len-1][1] < array[i][1] ? array[i][1] : output[len-1][1];
      output[len-1] = [output[len-1][0], bigger];
    } else if (array[i][0] < output[len-1][1]) {
      output[len-1] = [output[len-1][0], array[i][1]]
    } else if (output[len-1][1] < array[i][0]) {
      output.push(array[i])
    } else {
      output[len-1] = [output[len-1][0], array[i][1]]
    }
  }
  console.log(array)
  return output;
}

// var times = [[0, 1], [3, 5], [4, 8], [9, 13], [10, 12]]

// console.log(mergeRanges(times));

module.exports = mergeRanges;
