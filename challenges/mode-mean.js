/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let count = {};
  let highest = 0;
  let sum = 0;
  let mode;
  for(let key of array) {
    console.log(key);
    if(!count[key]) {
      count[key] = 1;
    } else {
      count[key]++;
    }
    if(highest < count[key]) {
      highest = count[key];
      mode = key;
    }
    sum += key;
  }
  let avg = sum/array.length;
  if(avg === mode) {
    return true
  }
  return false;
}

module.exports = modemean;












