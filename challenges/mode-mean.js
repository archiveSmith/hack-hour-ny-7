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
<<<<<<< HEAD
    let modeObj = {};
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if(!modeObj[array[i]]) {
            modeObj[array[i]] = 1;
        } else {
            modeObj[array[i]]++;
        }

    }
    let mean = Math.floor(sum / array.length);
    let currMaxMode = [[0, 0]];
    for(let key in Object.keys(modeObj)) {
        if(modeObj[key] > currMaxMode[currMaxMode.length-1][1]){
            currMaxMode.push([key, modeObj[key]]);
        }
    }
    currMaxMode
    let mode = currMaxMode[currMaxMode.length-1][0];
    return mode == mean;
}

console.log(modemean([2, 5, 3, 12, 4, 5, 3, 2, 6, 7, 1, 2, 3, 4, 3]));

=======

}

>>>>>>> bd20c3745dc75bcc5f040e4f3daaab2988ebeebb
module.exports = modemean;
