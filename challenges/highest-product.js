/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  array.sort((a, b) => a - b);

  const length = array.length;
  const highThree = array[length - 1] * array[length - 2] * array[length - 3];
  const lowTwo = array[0] * array[1] * array[length - 1];

  return Math.max(highThree, lowTwo);
}

module.exports = highestProduct;
