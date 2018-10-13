/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(arr, sum) {
  let total = 0;
  let nums = [];
  for(let i = 0; i < arr.length; i++) {
    if((arr[i] + arr[i+1] > sum) && arr[i] < arr[i+1]) {
      nums.push(arr[i]);
    } else if ((arr[i] + arr[i+1] > sum) && arr[i+1] < arr[i]) {
      nums.push(arr[i+1]);
    } else {
      if (arr[i] + arr[i+1] > sum) {
        nums.push(arr[i], arr[j])
      }
    }
    console.log(nums)
    for(let i = 0; i < nums.length; i++) {
    }
  }
}

module.exports = subsetSum;

/*
Chris's solution


function subsetSum(array, target) {
  const sets = powerSet(array);

  return sets.reduce(
    (accum, set) => accum || target === set.reduce((sum, num) => sum + num, 0),
    false
  );
}

function powerSet(array) {
  if (array.length === 0) return [[]];

  const left = powerSet(array.slice(1));
  const right = left.map(e => e.concat(array[0]));

  return left.concat(right);
}

*/
