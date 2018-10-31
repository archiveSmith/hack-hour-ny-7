/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr || !n || arr.length === 0){return false;}

  for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if(i !== j && arr[i] + arr[j] === n){
        return true;
      }
    }
  }

  return false
}

// const numArray = [12, 5, 6, 23, 15, 4, 3, 5, 13];

// console.log(twoSum(numArray, 16))

module.exports = twoSum;
