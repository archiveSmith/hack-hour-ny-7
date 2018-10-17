/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let bigThree = [];
    let lilThree = [];
  
    for (let x = 0; x < 2; x++) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === Math.min(...array)) {
          lilThree.push(array[i]);
          array.splice(i, 1);
        }
        if (array[i] === Math.max(...array)) {
          bigThree.push(array[i]);
          array.splice(i, 1);
        }
      }
    }
  
    let negProd = lilThree[0] * lilThree[1] * bigThree[0];
    let posProd = bigThree.reduce((acc, cur, idx) => {
      return acc *= cur;
    });
  
    if (negProd > posProd) {
      return negProd
    }
    else {
      return posProd;
    }
  }


module.exports = highestProduct;
