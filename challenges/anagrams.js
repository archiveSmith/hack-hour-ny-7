/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */



// function getAllPermutations (string)
//   define results
//   if string is a single character
//     add the character to results
//     return results
/////////////////////////////
//   for each char in string
//     define innerPermutations as a char of string
//     set innerPermutations to getAllPermutations (without next char)
//     foreach string in innerPermutations
//       add defined char and innerPermutations char
//   return results
function anagrams(string) {
  var results = [];
  //our base case
  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];

    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    console.log('x', charsLeft)
    //The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

    var innerPermutations = getAllPermutations(charsLeft);

    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results
}

getAllPermutations('abcd')


module.exports = anagrams;

