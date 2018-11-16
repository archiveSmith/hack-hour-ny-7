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

module.exports = mergeRanges;
