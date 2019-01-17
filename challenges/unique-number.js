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
function uniqueNumber(array) {
  const sorted = array.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i+=2) {
    if (sorted[i] !== sorted[i+1]) {
      return sorted[i];
    }
  }
  return null;
}

console.log(uniqueNumber([1,2,1,3,3,2,5,4,4]))

module.exports = uniqueNumber;
