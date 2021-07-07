//STUDY MODIFY
/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let cache = {};
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i], cache, cache[arr[i]]);
    if(cache[arr[i]] == true) { return true; }

    let difference = n - arr[i];
    cache[difference] = true;
  }
  return false;
}

console.log(twoSum([-4,7], 3));
//[1,2,3,4,5] => 7

module.exports = twoSum;
