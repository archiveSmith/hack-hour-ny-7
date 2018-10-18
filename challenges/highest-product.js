/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length === 0 || !Array.isArray(array)){return 0;}
  // You sort out the array
  const sortArray = array.sort((function(a, b){return a - b}));
  //Get the 2 lowest number and multiply by the largest number
  const negativeNum = array[0] * array[1] * array[array.length - 1];
  // Multiply the 3 highest number
  const positiveNum = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  // return the highest of the 2 numbers
  return negativeNum > positiveNum ? negativeNum : positiveNum;
}

console.log(highestProduct('this'));
module.exports = highestProduct;
