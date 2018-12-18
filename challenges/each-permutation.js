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

const eachPermutation = (arr, callback) => {
  let len = arr.length;

  let swap = (array, pos1, pos2) => {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };

  let heapsPerm = (arr, callback, len) => {
    if (len === 1) {
      callback(arr)
    }
    else {
      for (let i = 1; i <= len; i += 1) {
        heapsPerm(arr, callback, len - 1);
        let j;
        if (len % 2) {
          j = 1;
        } else {
          j = i;
        }
        swap(arr, j - 1, len - 1);
      }
    }
  };

  heapsPerm(arr, callback, len)
}



module.exports = eachPermutation;
