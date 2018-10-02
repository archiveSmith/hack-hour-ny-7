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
if (mean === mode) {
  return true
}
function mean(array){
  value = array.reduce(function(a, b) {
    return a + b
  }) / array.length
  mean = Math.floor(value);
}
function mode(array) {
  var numList = {};
  for(var i = 0; i < array.length; i++){
      if(numList[array[i]] === undefined){
          numList[array[i]] = 0;
      }        
          numList[array[i]] += 1;
  }
mostFreq = 0;
mode;
for (prop in numList) {
  if (numList[prop] > mostFreq) {
    mostFreq = numList[prop];
    mode = prop;
  }
}
}


module.exports = modemean;
