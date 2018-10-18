/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length < 3 || !Array.isArray(array)) return 0;
    let negatives = [];
    let positives = [];
    for(let index = 0; index < array.length; index++) {
      array[index] < 0 ? negatives.push(array[index]) : positives.push(array[index]);
    }
    negatives.sort((a,b) => a-b);
    positives.sort( (a,b) => b-a);
    if(positives.length === 0) return negatives[negatives.length - 1] * negatives[negatives.length - 2] * negatives[negatives.length - 3];
    if(positives.length === 1) return (negatives[0] * negatives[1] * positives[0]);
    if(positives.length === 2) {
      if(negatives.length > 1) {return (positives[1] * negatives[0] * negatives[1]);
      }else{
        return array.reduce((a,b) => a * b);
      }
    }
    return negatives[0] * negatives[1] > positives[0] * positives[1] ? negatives[0] * negatives[1] * positives[0] : positives[0] * positives[1] * positives[2];
}


module.exports = highestProduct;
