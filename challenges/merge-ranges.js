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


function mergeRangesOld(array) {
  array.sort((a, b) => a[0] - b[0])
  let output = [array[0]]

  for(let i = 1; i < array.length; i++) {
    const len = output.length;
    if (array[i][0] > output[len-1][0] && array[i][1] < output[len-1][1]) {
      output[len-1] = output[len-1];
    } else if (output[len-1][0] === array[i][0]) {
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
  // console.log(array)
  return output;
}

function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0]);

  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const curr = array[i];
    const last = result[result.length - 1];
    if (curr[0] > last[1]) {
      result.push(curr);
    } else if (curr[1] > last[1]) {
      last[1] = curr[1];
    }
  }
  return result;
}


// var times =  [ [ 1, 5 ], [ 2, 3 ], [ 6, 10 ], [ 7, 9 ] ]

// console.log(mergeRanges(times));

module.exports = mergeRanges;
