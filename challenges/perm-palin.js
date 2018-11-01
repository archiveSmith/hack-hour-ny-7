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
  return permPalinRec("", str.split(""));

  function permPalinRec (resultString, arr) {
    //BASE CASE
    if (arr.length === 0) { return checkPalindrome(resultString) }

    //RECURSIVE CALL
    for (let i = 0; i < arr.length; i++){
      let resultStringCopy = JSON.parse(JSON.stringify(resultString));
      let arrCopy = JSON.parse(JSON.stringify(arr));

      console.log(resultStringCopy, arrCopy);

      resultStringCopy+=arrCopy.splice(i, 1);
      if(permPalinRec(resultStringCopy, arrCopy)){
        return true;
      };
    }
    return false;
  }

  function checkPalindrome(string) {
    return string == string.split("").reverse().join("")
  }
}

console.log(permPalin('hello'));
console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));
console.log(permPalin());

module.exports = permPalin;