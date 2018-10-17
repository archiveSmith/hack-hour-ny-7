/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array = array.sort((a, b) => a - b)
    let lastThree = array.slice(-3);
    return lastThree[0] * lastThree[1] * lastThree[2];
}


module.exports = highestProduct;

console.log(highestProduct([5, 2, 4, 17, -5, 7, 3]));

