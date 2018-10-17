/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(!Array.isArray(array) || !array.length) return 0;

    array = array.sort((a, b) => a - b);
    let arrayNeg = 0;
    let arrayPos = 0;
    console.log(array);

    if (array[0] < 0 && array[1] < 0) {
        arrayNeg = array[0] * array[1] * array[array.length-1];
    } 

    let lastThree = array.slice(-3);
    arrayPos = lastThree[0] * lastThree[1] * lastThree[2];

    if (arrayNeg > arrayPos) 
        return arrayNeg;
    } else {
        return arrayPos;
    }
}

module.exports = highestProduct;


