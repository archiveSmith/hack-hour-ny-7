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
var arr1 = [3,4,6,10,11,15,21];
var arr2 = [1,5,8,12,14,19];


//just added the undefined edge case.
//number compared to a falsey is false. so we move to next synchronous action.
function mergeArrays(arr1, arr2) {
  let merge = [];
  let curr = 0;
  let index1 = 0;
  let index2 = 0;
  while(curr < (arr1.length + arr2.length) && arr1[index1] !== undefined && arr2[index2] !== undefined) { //while 0 < 15
    let unmerged1 = arr1[index1] //arr1[0]
    let unmerged2 = arr2[index2] //arr2[0]
    if(unmerged1 < unmerged2) {
      merge[curr].push(unmerged1);
      index1++;
    }
    else if(unmerged1 > unmerged2) {
      merge[curr].push(unmerged2);
      index2++;
    } else {
      merged[curr].push(arr1[index1] || arr2[index2]);
    }
    curr++;
  }
  return merge;
}

//log O(n) log
function mergeArraYS(arr1, arr2) {
 let result = [...arr1, ...arr2];
 result.sort((a,b) => a-b);
}

//multiple arrays and layered
const flatten = arr => [].concat(...arr);

//check length of both arrays => arr1.length && arr2.length.
module.exports = mergeArrays;



















