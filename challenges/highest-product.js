/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return;

    let sorted = array.sort();
    let trial1 = sorted[0] * sorted[1] * sorted[sorted.length-1];
    let trial2 = sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3];

    return Math.max(trial1, trial2);
}

console.log(highestProduct([5,6,7]));

module.exports = highestProduct;
