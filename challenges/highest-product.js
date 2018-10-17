/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  let newArr = array.sort(function (a, b) {
    if (a < b) { return 1; }
    else if (a === b) { return 0; }
    else { return -1; }
  });

  console.log(newArr);

  let prod1 = newArr[0] * newArr[1] * newArr[2];
  let prod2 = newArr[0] * newArr[newArr.length - 1] * newArr[newArr.length - 2];

  console.log(prod1)
  console.log(prod2)

  return prod1 > prod2 ? prod1 : prod2;

}


module.exports = highestProduct;
