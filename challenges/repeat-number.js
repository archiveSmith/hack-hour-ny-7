/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  if(!array){return array;}
  const storeNum = {};
  for(let i = 0; i < array.length; i++){
    if(storeNum[array[i]]){
      return array[i]
    }
    storeNum[array[i]] = array[i]; 
  }
}

console.log(repeatNumbers([2, 4, 5, 6, 1, 23, 45, 65, 23, 43]));

module.exports = repeatNumbers;
