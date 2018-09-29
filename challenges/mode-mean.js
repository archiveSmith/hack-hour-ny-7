/*
 * Given an array of numbers, determine if the mode and mean of the array are 
 * equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function mean (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return Math.floor(sum/arr.length);
}

function highMode (arr){
    let countObj = {};
    let max = 0;
    let modeMax;

    for (let i = 0; i < arr.length; i++){
        if (countObj[arr[i]]){
            countObj[arr[i]]++;
            max = Math.max(countObj[arr[i]], max);
        } else {
            countObj[arr[i]] = 1;
        }
    }
    for (let key in countObj){
        if (countObj[key] === max){
            if (modeMax === undefined){
                modeMax = key;
            } else {
                modeMax = Math.max(modeMax, key);
            }
        }
    }
    return modeMax;
}

function modemean(array) {
    return mean(array) == highMode(array);
}



module.exports = modemean;
