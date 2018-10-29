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

function permPalin(str) {
  const stack = [];
  const charArray = str.split('').sort();

  for (let char of charArray) {
    if (stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.length <= 1;
}

function permPalin(str) {
  const table = {};
  let count = 0;

  for (let char of str) {
    table[char] = !table[char];
  }

  for (let char in table) {
    if (table[char] && ++count > 1) {
      return false;
    }
  }

  return count <= 1;
}

function permPalin(str) {
  return Object.values(str.split('').reduce((a, char) => ((a[char] = !a[char]), a), {})).reduce((a, value) => (value ? a + 1 : a), 0) <= 1;
}

module.exports = permPalin;