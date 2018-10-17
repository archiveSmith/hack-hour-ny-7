/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let newArr = array.slice().sort((a, b) => a - b).reverse();
  return newArr[0] * newArr[1] * newArr[2];
}

// console.log(highestProduct([2, 55, 1, 5, 6, 88, 3, -4]))
module.exports = highestProduct;
