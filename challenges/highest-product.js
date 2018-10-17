/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => a - b);
  return array.splice(array.length - 3, 3).reduce((acc, curr) => {
    return (acc *= curr);
  });
}

module.exports = highestProduct;
