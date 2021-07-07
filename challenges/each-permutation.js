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
  let permArr = [];
  generatePerms([], arr)

  permArr.forEach(perm => callback(perm));

  function generatePerms (finishedChars, unFinishedChars) {
    //base case
    if (unFinishedChars.length === 0) {
      permArr.push(finishedChars);
      return;
    };

    for (let i = 0; i < unFinishedChars.length; i++) {
      let finishedCharCopy = finishedChars.slice();
      let unFinishedCharCopy = unFinishedChars.slice();

      finishedCharCopy.push(unFinishedCharCopy.splice(i,1)[0]);
      generatePerms(finishedCharCopy, unFinishedCharCopy);
    };
  }
}

console.log(eachPermutation([1,2,3], (perm) => {
  console.log(perm.map(el => el*2));
}));



module.exports = eachPermutation;
