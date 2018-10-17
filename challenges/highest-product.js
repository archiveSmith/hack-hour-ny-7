/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if (array.length < 3 || !Array.isArray(array)) return 0;

  let sorted = array.slice().sort((a, b) => a - b).reverse();
  let prod = sorted.slice(0, 3);

  if (array.length > 3 ) prod.push(sorted.pop());
  if (array.length > 4 ) prod.push(sorted.pop());

  let first = prod[0] * prod[1] * prod[2];
  let last = prod[0] * prod[prod.length-1] * prod[prod.length-2];

  if (first > last) return first
  else return last;

}

module.exports = highestProduct;
