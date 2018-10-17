/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//     let maxProd = array[0] * array[1] * array[2];
//     for (let i = 1; i < array.length - 2; i++){
//       let temp = array[i] * array[i+1] * array[i+2];
//       maxProd = Math.max(maxProd, temp);
//     }
  
//     return maxProd;
// }

function highestProduct(array){
    let sorted;
    if(array.length > 2){
        sorted = array.sort();
    }
    if (sorted){
        return Math.max((sorted[0] * sorted[1] * sorted[sorted.length - 1]), (sorted[sorted.length - 1]*sorted[sorted.length - 2]*sorted[sorted.length - 3]))
    } else {
        return 0;
    }
}


module.exports = highestProduct;
