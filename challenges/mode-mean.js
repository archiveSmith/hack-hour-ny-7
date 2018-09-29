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
  //mode
  let obj = array.reduce(function(acc, curr) {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  let mode = Object.keys(obj).reduce(
    (acc, curr) => (obj[acc] > obj[curr] ? acc : curr)
  );

  //mean
  let mean = array.reduce(function(acc, curr) {
    acc += curr;
    return acc;
  });
  mean = Math.floor(mean / array.length);
  console.log(mode);
  console.log(mean);

  return mode === mean;
}
modemean([1, 1, 1, 2, 3, 2, 2, 2, 2, 2]);

module.exports = modemean;
