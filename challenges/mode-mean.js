/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 * Return true or false
 *
 */
function modemean(array) {
  let sum = 0
  let mean = 0
  let mode = 0
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < i; j++){
      if (array[j] === array[i])
      mode = array[j]
      count++
      return mode
  }
} 
}
console.log(modemean(array))

module.exports = modemean

