/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;


  let sorted = array.sort(function (a, b) { return b - a });

  let checkForNegative = sorted.slice()
  let productOfFirstThree = sorted.slice(0, 3).reduce((a, b) => a * b);


  let checkForNegetive = sorted.slice(0, 1).


}


module.exports = highestProduct;
