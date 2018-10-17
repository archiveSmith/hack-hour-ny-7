/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) {
    return 0;
  }
  let left;
  let right;
  array.sort((a, b) => a - b);
  if (array[0] < 0 && array[1] < 0) {
    left = array[0] * array[1] * array[array.length - 1];
    right =
      array[array.length - 1] *
      array[array.length - 2] *
      array[array.length - 3];
  } else {
    right =
      array[array.length - 1] *
      array[array.length - 2] *
      array[array.length - 3];
  }
  return left > right ? left : right;
}

module.exports = highestProduct;
