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
  const memo = {};
  let mean = 0;
  let mode;

  for (let i = 0; i < array.length; i++) {
    if (memo[array[i]]) {
      memo[array[i]]++;
    } else {
      memo[array[i]] = 1;
    }
    mean += array[i];
  }

  for (let key in memo) {
    if (mode === undefined) {
      mode = key;
    } else if (memo[mode] < memo[key]) {
      mode = key;
    } else if (memo[mode] === memo[key]) {
      if (key > mode) {
        mode = key;
      }
    }
  }

  mean = Math.floor(mean / array.length);

  return mean === Number(mode);
}

modemean([1, 1]);
module.exports = modemean;
