/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let highest = 0;
  for(let i = 0; i < array.length; i++) {
    for(let j = i+1; j < array.length; j++) {
      for(let k = j+1; k < array.length; k++) {
        let product = (array[i] * array[j] * array[k])
          console.log(product);
          if(product > highest) {
            highest = product;
          }
      }
    }
  }
  return highest;
}

if(!Array.isARray(array) || array.length < 3) return 0;
array.sort((a,b) => a-b); //how to sort array, smallest to largest, other way with plus largest to smallest.
const {length} = array; //pull up length.
// const {length, map, sort} = array; //object destructuring
const productOfThreeLarge = arraty[length-1]  array[length-2]  * array[length-3];
const productofTwoSmallestAndLargest = array[0] * array[1] * array[length-1];
return Math.max(productOfThreeLargest, productofTwoSmallestAndALrgest)
module.exports = highestProduct;
