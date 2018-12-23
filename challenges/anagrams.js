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
  const array = string.split('');
  const results = [];

  function combinations(array, newArr = []){
    console.log(array);
    if(array.length === 0){
      newArr = newArr.join('');
      results.push(newArr);
    }

    for (let i = 0; i < array.length; i++){
      let copyArray = array.slice();
      let copyNewArray = newArr.slice();
      copyNewArray.push(copyArray[i]);
      copyArray.splice(i, 1);
      combinations(copyArray, copyNewArray);
    }
  }

  combinations(array);
  return results;
}

console.log(anagrams('abc'));

module.exports = anagrams;
