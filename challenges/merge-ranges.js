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
  let result = [];
  result.push(array[0])

  for (let i=1; i<array.length; i++) {
    let flag=false;
    for (let j=0; j<result.length; j++) {
      if (array[i][0] < result[j][1]) { //if 4 < 1... if 4<5
        flag = true;
        if (array[i][0] < result[j][0]) { //if 4 < 3
          result[j][0] = array[i][0]; //change 3 to 4
        } else {
          if (array[i][1]>result[j][1]) {
            result[j][1] = array[i][1];
          } 
        }
      }  
    } 
      if (!flag) {
        result.push(array[i]); 
      }  
  }
  return result
}
array=[0];
mergeRanges();





//*********************************fellow solution *********************************
function mergeRanges(array) {
  if (array.length === 0) return [];

  // sort array in ascending order by the first number in the subarray
  array.sort((a, b) => a[0] - b[0]);

  // initialize output array with first element in the input array
  const output = [array[0]];

  // iterate input array starting at the second element
  for (let i = 1; i < array.length; i++) {
      // grab the current subarray
      const currentRange = array[i];

      // grab the last subarray in the output array
      const previousRange = output[output.length - 1];

      if (currentRange[0] <= previousRange[1]) {
          previousRange[1] = currentRange[1];
      } else {
          output.push(currentRange);
      }
  }

  return output;
}
module.exports = mergeRanges;
