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
console.log("Hello from perm-palin.js");

function checkPalin(str) {
  const remove = /[\W_]/g;
  const fixedString = str.toLowerCase().replace(remove, '');
  const reversedString = fixedString.split('').reverse().join('');
  const result = fixedString === reversedString;
  return result;
}

function permPalin(str) {

}

module.exports = permPalin;
