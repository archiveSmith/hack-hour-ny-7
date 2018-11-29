/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 * 1,7,3   7, 3, 4,   3, 4, 1    4, 1, 7
 * [1, 7, 3, 5, 2] --> 1, 7, 3, 5     7, 3, 5, 2    3, 5, 2, 1      5, 2, 1, 7   2, 1, 7, 3
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let arrayCopy = array.slice(0);
  let productsArr = [];
  arrayCopy.push(arrayCopy.shift());
  const check = (arr, otherArr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== otherArr[i]) return true
    }
    return false;
  }
  while(check(arrayCopy, array)) {
    let product = 1;
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      product *= arrayCopy[i];
    }
    productsArr.push(product);
    arrayCopy.push(arrayCopy.shift());
  }

  let product = 1;
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      product *= arrayCopy[i];
    }
    productsArr.push(product);
  return productsArr;
}

module.exports = getAllProducts;
