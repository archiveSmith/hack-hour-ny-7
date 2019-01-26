/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 subsetSum([8, 2, 4, 12], 13) -> false
 subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

  const sets = [[]];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0, length = sets.length; j < length; j++) {
      let temp = sets[j].concat(array[i]);
      sets.push(temp);
      let sum = temp.reduce((p,c) => { return p + c });
      if (sum === target) { return true }
    }
  }
  return false;
};
 
function subsetSumRecursive(array, target) {
  if (!target) return true;
  if (!array.length) return false;
  
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);

}

function subsetSumDynamic(array, target) {
  const matrix = [];
  for (let i = 0; i <= array.length; i++) {
    matrix[i] = new Array(target + 1);
    matrix[i][0] = true;
  }

  for (let i = 1; i <= array.length; i++) { 
    for (let j = 1; j <= target; j++) {
      if (j < array[i - 1]) {
        matrix[i][j] = matrix[i-1][j];
      } else {
        matrix[i][j] = matrix[i - 1][j] || matrix[i - 1][j - array[i - 1]];
      }
    }
    if (matrix[i][target]) {
      const output = [];
      let currX = target;
      let currY = i; 
      while (currX) {
        if (!matrix[currY-1][currX]) {
          output.push(array[currY - 1]);
          currX = currX - array[currY - 1];
          currY--;
        } else {
          currY--
        }
      }
      return output;
    }
  }
  return false;
}


// const arr = [1,2,3].slice(1);
// console.log(arr)
// console.log(subsetSum([1, 3, 4, 5], 6))
// console.log(subsetSum([11, 4, -4, 2, -3], 9))
// console.log(subsetSum([3, 34, 4, 5, 12, 15], 43))
// // console.log(subsetSumDynamic([8, 2, 4, 12], 13))
// console.log(subsetSum([8, -2, 1, -3], 6))

// console.log(subsetSumDynamic([3, 34, 4, 12, 5, 12], 32))

module.exports = subsetSum;
