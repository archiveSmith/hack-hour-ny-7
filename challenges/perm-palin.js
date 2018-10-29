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
  let cache = {};
	for (let i = 0; i < str.length; i++) {
    if (cache[i]) {
      cache[i]++;
    } else {
      cache[i] = 0;
    }
  }
  for (let keys of Object.keys){
    if
  }
}

module.exports = permPalin;