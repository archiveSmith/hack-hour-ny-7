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

//123, 132, 213, 231, 312, 321

// function anagrams(string) {
//   let result = [];
//   if (string.length === 1) return [string]

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     let unused = string.slice(0, i) + string.slice(i + 1, string.length)
//     let innerpermutations = anagrams(unused)

//     for (let j = 0; j < innerpermutations.length; j++) {
//       result.push(char + innerpermutations[j])
//     }
//   }
//   return result;
// }

let result = [];
function anagrams(string, x = '') {
  if (!string) return result.push(x);

  for (let i = 0; i < string.length; i++) {
    x += string[i];
    let unused = string.slice(0, i) + string.slice(i + 1, string.length)
    anagrams(unused, x)
    x = x.slice(0, x.length - 1)
  }
}
anagrams('abc')
console.log(result)
module.exports = anagrams;
