/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sorted = array.slice().sort((a, b) => a - b).reverse();
  let prod = sorted.slice(0, 3);

  prod.push(sorted.pop());
  prod.push(sorted.pop());

  let first = prod[0] * prod[1] * prod[2];
  let last = prod[0] * prod[3] * prod[4];

  if (first > last) return first
  else return last;

}

module.exports = highestProduct;
