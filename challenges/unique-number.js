/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(arr) {
  let storage = {};

  for (let i = 0; i < arr.length; i++) {
    if (!storage[arr[i]]) {
      storage[arr[i]] = true;
    } else if (storage[arr[i]]) {
      delete storage[arr[i]];
    }
  }
  return Number(Object.keys(storage)[0]);
}

module.exports = uniqueNumber;
