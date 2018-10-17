/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let bigThree = [];
    let lilThree = [];
  
    for (let x = 0; x < 2; x++) {
      array.forEach( (cur, idx) => {
        if (cur === Math.min(...array)) {
          lilThree.push(cur);
          array.splice(idx, 1);
        }
        if (cur === Math.max(...array)) {
          bigThree.push(cur);
          array.splice(idx, 1);
        }
      });
    }
  
    let negProd = lilThree[0] * lilThree[1] * bigThree[0];
    let posProd = bigThree.reduce((acc, cur, idx) => {
      return acc *= cur;
    });
  
    return negProd > posProd ? negProd : posProd;
  }

module.exports = highestProduct;
