/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let posArr = [];
  let bigThree = [];
  let negCount = 0;

  for (let x = 0; x < 2; x++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === Math.max(...array)) {
        bigThree.push(array[i]);
        array.splice(i, 1);
      }
    }
  }

  return bigThree.reduce((acc, cur, idx) => {
    return acc *= cur;
  });
}


module.exports = highestProduct;
