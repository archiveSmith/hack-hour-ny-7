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
	let s = str.toLowerCase().split('').sort();
  let obj = {};
  for (let i=0; i<s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1
    } else {
      obj[s[i]] = obj[s[i]]+1
    }
  }
  // console.log(obj)
  let odds = 0;
  for (let x in obj) {
    if (obj[x] % 2 != 0) odds++
  }
  
  if (odds === 0 || odds === 1) return true;
  if (odds % 2 == 0) {
    return false
  } else {
    return true;
  }
}

module.exports = permPalin;