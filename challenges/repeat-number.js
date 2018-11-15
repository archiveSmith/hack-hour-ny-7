/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time // proportional to how many numbers there are
 * Do this in O(1) space // non proportional
 *
 */

function repeatNumbers(array) {
  let sorted = array.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i];
    }
  }
}

module.exports = repeatNumbers;
