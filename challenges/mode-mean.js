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



//in class solution


function modemean(array) {
  return mean(array) === mode(array);
}

function mean(array) {
  let sum = array.reduce((sum,next) => sum + next)
  return Math.floor(sum / array.length);
}

function mode(array) {
  const reference = {};
  const modes = [];
  let maxCounts = 0;

  for(let i = 0; i < array.length; i++) {
    if(reference[array[i]) {
      reference[array[i]]++;
      if(refernce[array[i]] > maxCounts)
        maxCounts = reference;
        [array[i]];
    }
    else {
      reference[array[i]] = 1;
    }
  }
}

//Objects keys are string data types. if a number is a key it will be in the form of a string.



module.exports = modemean;












