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
// mean is the average
// mode is repeated more than any other

function modemean(array) {
function mean (){
  return array.reduce(function(a, b) {
    return a + b
  }) / array.length
}
}

module.exports = modemean;
