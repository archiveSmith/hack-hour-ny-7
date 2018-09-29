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
    if(!Array.isArray(array)) return;
    else if (!array) return;

    //set up
    let sum = 0;
    let cache = {};
    array.forEach(element => {
        sum += element;

        if(cache[element] === undefined) {
            cache[element] = 0;
        } 
        cache[element]++;
    });

    //calculate mean
    let mean = Math.floor(sum/array.length);

    //calculate mode
    let currentMode = new Array(0,0);
    Object.keys(cache).forEach(key => {
        //where mode is the same...
        if((cache[key] === currentMode[1] && key > currentMode[0]) ||  (cache[key] > currentMode[1])){
            currentMode[0] = key;
            currentMode[1] = cache[key];
        } 
       
    });
    let mode = currentMode[0];

    //compare
    return mode == mean;
}

console.log(modemean([3,4,5,5,8]));

module.exports = modemean;
