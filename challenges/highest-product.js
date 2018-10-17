/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array = array.sort((a, b) => a - b);
    if (array[0] < 0 && array[1] < 0) {
        return array[0] * array[1] * array[array.length-1];
    } else {
        let lastThree = array.slice(-3);
        return lastThree[0] * lastThree[1] * lastThree[2];
    }
}

console.log(highestProduct([-79, -12, -5, 5, 2, 6, 9, 10]))


module.exports = highestProduct;


