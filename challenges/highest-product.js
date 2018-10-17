/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length < 3 || !Array.isArray(array)) return 0;
    let negatives = [];
    let positives = [];
    for(let index = 0; index < array.length; index++) {
      if(array[index] < 0) {
        if(negatives.length === 0) {
            negatives.push(array[index]);
        } else {
          for(let x = 0; x < negatives.length; x++) {
            if(negatives[x] > array[index]) {
                negatives.splice(x, 0, array[index])
                break;
            }
          }
        }
      } else {
        if(positives.length === 0) {
            positives.push(array[index]);
        } else {
            for(let x = 0; x < positives.length; x++) {
                if(positives[x] < array[index]) {
                    positives.splice(x, 0, array[index])
                    break;
                }
            }
        }
      }
    }
    if(positives.length === 0) return negatives[negatives.length - 1] * negatives[negatives.length - 2] * negatives[negatives.length - 3];
    return (negatives[0] * negatives[1]) > positives[0] * positives[1] ? negatives[0] * negatives[1] * positives[0] : positives[0] * positives[1] * positives[2];
}

highestProduct([1,2,3,4,5,7,3,4,8,9,-1,-5,-9,-4])


module.exports = highestProduct;
