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
    //get string length
    //if string is even number, all letters must appear even number of times 
    //if string is odd, one letter appears once, all others appear even number of times

    let chars = str.split('');
    let counter = 0;
    let len = chars.length;
    let countObj = {};
    for(let i = 0; i < chars.length; i++){
        if(countObj[chars[i]]){
            delete countObj[chars[i]];
            counter--;
        } else {
            countObj[chars[i]] = 1;
            counter++
        }
    }
    if(len % 2 === 0){
        return counter === 0;
    } else {
        return counter === 1;
    }

}

module.exports = permPalin;