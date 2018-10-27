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
  if (!str) { return false }

  let result = false;
  permPalinRec("", str.split(""));
  return result;

  function permPalinRec (resultString, arr) {
    //BASE CASE
    if (arr.length === 0) {
      return checkPalindrome(resultString);
    }

    //RECURSIVE CALL
    arr.forEach((char, index) => {
      //copy result string and array
      let resultStringCopy = JSON.parse(JSON.stringify(resultString));
      let arrCopy = JSON.parse(JSON.stringify(arr));

      resultStringCopy+=arrCopy.splice(index, 1);
      permPalinRec(resultStringCopy, arrCopy);
    })
  }

  function checkPalindrome(string) {
    return string == string.split("").reverse().join("") ? result = true : ""
  }
}

console.log(permPalin('hello'));
console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));
console.log(permPalin());

module.exports = permPalin;