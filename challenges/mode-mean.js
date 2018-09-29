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
  let mean = Math.floor(array.reduce((acc, curr) => curr + acc) / array.length);
  const freq = {}
  const sortedArr = array.slice().sort();
  for (let num of sortedArr) {
    freq[num] ? freq[num]++ : freq[num] = 1
  }

  let compare = 0;
  let mode = 0;

  for (let num in freq) {
    if (freq[num] >= compare && freq[num] > mode) {
      compare = freq[num];
      mode = num;
    }
  }
  if (mode === mean) { return true; }
  return false;
}
  


module.exports = modemean;


modemean([1, 4, 2, 2, 2, 3, 3, 3, 5, 3, 1, 1, 1, 1, 3])