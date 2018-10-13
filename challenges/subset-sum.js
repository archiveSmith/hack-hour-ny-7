/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
<<<<<<< HEAD
    // array = array.sort((a, b) => a - b);
    // let testerSum = 0;
    // for (let i = 0; i < array.length-1; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         testerSum = array[i];
    //         if (array[j] + testerSum < target) {
    //             testerSum += array[j];
    //         } else if (array[j] + testerSum === target) {
    //             return true;
    //         }
    //     }
    // }
    // return false;
    let cache = [];
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            cache.push(array.slice(0, array.length-i))
        }
        let firstItem = array.shift();
        array.push(firstItem);
    }
    // console.log(cache);
    for (let i = 0; i < cache.length; i++) {
        let sumTest = 0;
        for (let j = 0; j < cache[i].length; j++) {
            sumTest += cache[i][j];
        }
        if (sumTest === target) return true;
    }
    return false;
}

// console.log(subsetSum([3, 7, 4, 2], 5)) // - > true, 3 + 2 = 5
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
// console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6

// console.log(array.slice(0, 4))
// console.log(array.sort((a, b) => a < b))
=======

}

>>>>>>> c1261e2938665197fdc159f347b8b8a160372814
module.exports = subsetSum;
