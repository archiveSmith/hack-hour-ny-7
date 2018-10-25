/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * let my_array = [3,4,6,10,11,15,21];
 * let another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    let ind1 = 0;
    let ind2   = 0;
    let indMerged = 0;

    while (indMerged < (arr2.length + arr1.length)) {
        let isarr2done = ind2 >= arr2.length;
        let isarr1done = ind1 >= arr1.length;
        if (!isarr2done && (isarr1done || (arr2[ind2] < arr1[ind1]))) {
            mergedArray[indMerged] = arr2[ind2];
            ind2++;
        } else {
            mergedArray[indMerged] = arr1[ind1];
            ind1++;
        }
        indMerged++;
    }

    return mergedArray;
}

// console.log(mergeArrays([1,3,5,11], [1,2,3,4,6,8,9,10]));



module.exports = mergeArrays;
