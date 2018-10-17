/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  let sorted = array.slice().sort((a, b) => a - b).reverse();
 
  let first = sorted[0] * sorted[1] * sorted[2];
  let last = sorted[0] * sorted[sorted.length-1] * sorted[sorted.length-2];

  if (first > last) return first
  else return last;

}

module.exports = highestProduct;
