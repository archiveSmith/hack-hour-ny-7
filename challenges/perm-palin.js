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
  let arr = str.split('');
  arr = arr.sort();
  let count = 0;

  for (let i=0; i<arr.length; i++) {
    console.log(arr[i+1])
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