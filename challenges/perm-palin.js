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
  if (typeof(str) !== 'string') return false;
  let arr = str.split('');
  arr = arr.sort();
  let count = 0;

  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      count++;
    } else if (arr[i] === arr[i+1]) {
      i++;
    }
  }
  if (count <= 1) return true;
  else return false;
}



module.exports = permPalin;