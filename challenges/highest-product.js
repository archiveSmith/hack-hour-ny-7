/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length <= 3) return array.reduce((acc, cv) => acc * cv, 1);

  array = array.sort((a, b) => a - b)
  if ((array[0] < 0 && (array[0] * -1) > array[array.length - 1]) && (array[1] < 0 && (array[1] * -1) > array[array.length - 2])) {
    return array[0] * array[1] * array[array.length - 1];
  } else {
    return array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
  }
}

//*********************************fellow solution *********************************
function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  array.sort((a, b) => a - b);

  const { length } = array;
  const productOfThreeLargest = array[length - 1] * array[length - 2] * array[length - 3];
  const productOfTwoSmallestAndLargest = array[0] * array[1] * array[length - 1];

  return Math.max(productOfThreeLargest, productOfTwoSmallestAndLargest);
}

module.exports = highestProduct;