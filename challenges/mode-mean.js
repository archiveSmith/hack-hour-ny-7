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
	let objectCount = {};
	let sum = 0;
	array.forEach(function(element) {
		if(objectCount[element]) {
			objectCount[element]++;
		} else {
			objectCount[element] = 1;
		}
		sum += element;
	})
	let mode = array.reduce(function(max, input) {
		if(objectCount[max] === objectCount[input]) {
			if(max > input) {
				return max;
			} else {
				return input;
			}
		} else if (objectCount[max] < objectCount[input]) {
			return input;
		} else {
			return max;
		}
	})
	return Math.floor(sum/array.length) === mode ? true : false;
}

module.exports = modemean;
