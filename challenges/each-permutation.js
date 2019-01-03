/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {

}
/*
function eachPermutation(arr, callback) {
  function getPermutations(arr) {
    if (arr.length <= 1) return [arr];

    const first = [arr[0]];
    const rest = arr.slice(1);

    return getPermutations(rest).reduce((accum, perm) => {
      for (let i = 0; i <= rest.length; i++) {
        accum.push(
          perm
            .slice(0, i)
            .concat(first)
            .concat(perm.slice(i))
        );
      }

      return accum;
    }, []);
  }

  const perms = getPermutations(arr);
  perms.forEach(perm => callback(perm));
}

// Backtracking & Decrease and Conquer O(n!)
function eachPermutation(array, callback) {
  return permute(0);

  function permute(element) {
    for (let i = element; i < array.length; i++) {
      swap(array, i, element);
      permute(element + 1);
      swap(array, element, i);
    }

    if (element === array.length - 1) {
      callback(array);
    }
  }

  function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
}
*/

/*
Whiteboarding with Jason

function Finish(incomingArray) {
  let results = [];
  combinations(incomingArray);
  function combinations(array, newArr = []) {
    if(array.length !== 0) {
      for(let i =0; i < array.length; i++) {
          let copyArr = array.slice();
          let copyNewArr = newArr.slice();
          copyNewArr.push(copyArr[i]);
          copyArr.splice(i,1);
          // console.log(copyNewArr, copyArr)
          combinations(copyArr, copyNewArr);
      }
    }
    else {
      results.push(newArr);
    }
  }
  return results;
}

let array = ['a', 'b', 'c'];
Finish(array);

//n^n for repeats,
//2^n for combinations. two recursive calls one with adding empty array to new spliced array and second adding pushed spliced array with original array.
*/


module.exports = eachPermutation;
