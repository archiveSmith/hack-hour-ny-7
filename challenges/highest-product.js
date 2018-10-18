/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length < 3) {
    return 0;
  } else if (array.length === 3) {
    return (arrProd = array.reduce((acc, cur) => {
      return acc * cur;
    }));
  } else {
    array = array.sort(function(a,b){
      return a-b})

    let posHigh = array.slice(array.length - 3, array.length);
    // let negHigh = array.slice(0,3);
    let sumPos = posHigh.reduce((a, b) => a * b);
    // let sumNeg = negHigh.reduce((a, b) => a * b);
    let sumNeg2 = [];
    sumNeg2.push(array[0] * array[1] * array[array.length-1])

    if (sumPos > sumNeg2) {
      return sumPos;
    } else {
      return sumNeg2;
    }
  }
}


module.exports = highestProduct;
