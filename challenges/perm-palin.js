/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    // if odd number there should be one left
    // if even none left
    let newArr = str.split("");
    let charObj = {};
    let counter = 0;
    for (let i =0; i<newArr.length; i++) {
        if (!charObj[newArr[i]]) {
            charObj[newArr[i]] = 1;
            counter++
        } else if (charObj[newArr[i]]) {
          delete charObj[newArr[i]] 
          counter--
        }
    }
    console.log(charObj)
   if (newArr.length % 2 === 0 && counter === 0) {
     return true
   } else if (counter === 1) {
     return true
   } else {
     return false
   }
}



module.exports = permPalin;