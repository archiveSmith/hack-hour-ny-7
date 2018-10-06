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
  var total = 0;
  for (element of array) {
    total += element;
  }
  var mean = Math.floor(total / array.length);

  const counter = {};
  for (let element of array) {
    !Object.keys(counter).includes(element)
      ? counter[element] = 1
      : counter[element] += counter[element];
  }
  console.log(counter);
  const mode = Object.keys(counter).reduce((acc, curr) => counter[acc] > counter[curr] ? acc : curr);

  return (mean === mode);
}

module.exports = modemean;
