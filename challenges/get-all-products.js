/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function multiply(array){
  let result;
  for(let i = 0; i < array.length; i++){
    if(!result){
      result = array[i];
    }else{
      result = result * array[i];
    }   
  }

  return result;
}

function getAllProducts(array) {
  const productArr = [];
  let newArr;

  for(let i = 0; i < array.length; i++){
    newArr = array.slice();
    newArr.splice(i, 1);
    productArr.push(multiply(newArr));
  }

  return productArr;
}

//[84, 12, 28, 21]
console.log(getAllProducts([1, 7, 3, 4]));
module.exports = getAllProducts;
