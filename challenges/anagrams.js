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

function anagrams_ClosureRecursion(string) {
  let resultArr = [];
  anagramRec('', string.split(''));
  return resultArr;

  function anagramRec(resultString, charArr) {
    if(charArr.length === 0) {
      resultArr.push(resultString);
      return;
    }

    charArr.forEach((char, index, array) => {

      appendResult = resultString + char;
      let charArrCopy = array.slice();
      charArrCopy.splice(index,1);

      anagramRec(appendResult, charArrCopy);
    });
  } 
}

function anagrams_tailCallRecursion(string) {
  return anagramRec([{ 
    string : "",
    remainingChars : string.split(''),
  }]);

  function anagramRec(resultArr) {
    //base case...replace objects with strings
    if (resultArr[0].remainingChars.length === 0) {
      return resultArr.map(result => result.string);
    }

    let newResultArr = [];

    //for each result object, increase string length and decrease array length
    resultArr.forEach(result => {
      result.remainingChars.forEach((char, index, array) => {
        let remainingCharCopy = array.slice();
        remainingCharCopy.splice(index, 1);

        let newString = result.string + char;

        newResultArr.push({
          string : newString,
          remainingChars : remainingCharCopy,
        });
      })
    });

    //recursive call
    return anagramRec(newResultArr);
  } 
}

function anagrams(string) {
  let resultQueue = [{ 
    string : "",
    remainingChars : string.split(''),
  }];

  let continueLoop = true;
  while (continueLoop) {
    //check for complete
    if (resultQueue[0].remainingChars.length === 0) {
      return resultQueue.map(result => result.string);
    }

    let shifted = resultQueue.shift();

    shifted.remainingChars.forEach((char, index, array) => {
      let remainingCharCopy = array.slice();
      remainingCharCopy.splice(index, 1);

      let newString = shifted.string + char;

      resultQueue.push({
        string : newString,
        remainingChars : remainingCharCopy,
      })
    });
  }

  return resultQueue;
}


console.log(anagrams('abc'));

module.exports = anagrams;
