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
      return acc + cur;
    }));
  } else {
    let posHigh = array.slice(array.length - 3, array.length);
    let negHigh = array.slice(array.length - 1);
    negHigh.push(array[0], array[1]);
    let sumPos = posHigh.reduce((a, b) => a * b);
    let sumNeg = negHigh.reduce((a, b) => a * b);

    if (sumPos > sumNeg) {
      return sumPos;
    } else {
      return sumNeg;
    }
  }
}

module.exports = highestProduct;
