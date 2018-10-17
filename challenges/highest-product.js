/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(!Array.isArray() || !array.length) return 0;

    array = array.sort((a, b) => a - b);
    if (array[0] < 0 && array[1] < 0) {
        return array[0] * array[1] * array[array.length-1];
    } else {
        let lastThree = array.slice(-3);
        return lastThree[0] * lastThree[1] * lastThree[2];
    }
}

module.exports = highestProduct;


