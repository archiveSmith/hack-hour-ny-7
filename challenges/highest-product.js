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
    let n1 = array[0];
    let n2 = array[0];
    let p1 = array[0];
    let p2 = array[0];
    let p3 = array[0];

    for (let i = 1; i < array.length; i++){
        if (array[i] > 0){
            if (array[i] > p1){
                let temp1 = p1;
                let temp2 = p2;
                p3 = temp2;
                p2= temp1;
                p1 = array[i]

            } else if (array[i] > p2){
                p3 = p2;
                p2 = array[i];
            } else if (array[i] > p3){
                p3 = array[i];
            }
        } else {
            if (array[i] < n1){
            n2 = n1;
            n1 = array[i]
            } else if (array[i] < n2){
            n2 = array[i];
            }
        }
    }
    return Math.max((n1*n2*p1), (p1*p2*p3));
}


module.exports = highestProduct;
