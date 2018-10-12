/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
function subsetSum(array, target) {
  /*create an array for containing all sums */
  let acc = [0];
  /* loop through original array */
  for (let i = 0; i < array.length; i++) {
    /* clone the original array */
    let clone = [...acc]
    /* loop through clone */
    for (let j = 0; j < clone.length; j++) {
      /* create new var with summing the idx of both arrays */
      let acc2 = array[i] + clone[j];
      /* conditional */

      if (acc2 === n) {
        return true;
      } else if (acc2 < n) {
        acc.push(acc2)
      }
    }
  }
  return false
}

module.exports = subsetSum;
