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

function anagrams(string) {
  if (string.length < 2) return string; // This is our break condition (base case)

  var permutations = []; // This array will hold our permutations

  for (let i=0; i<string.length; i++) {
      const char = string[i];

      // Cause we don't want any duplicates:
      if (string.indexOf(char) !== i) // if char was used already
          continue;           // skip it this time

      const remainingString = string.slice(0,i) + string.slice(i+1,string.length);

      const subPerms = anagrams(remainingString)

      // iterate through subperms to concatenate them to 
      // your current char and push into permutations array
      for (let subPermutation of subPerms)
          permutations.push(char + subPermutation)

  }
  return permutations; // make sure you return your permutations!
}

module.exports = anagrams;

