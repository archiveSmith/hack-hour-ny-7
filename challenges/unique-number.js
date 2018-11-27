/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  let cache = {}
  let currentUnique = [];
  for (let i = 0; i < array.length; i++){
    if (cache[array[i]] !== undefined) {
      cache[array[i]] = 0;
      currentUnique.pop();
    } else {
      cache[array[i]] = 1;
      currentUnique.push(array[i]);
    }

  }
  let finalObj = Object.entries(cache);
  console.log(finalObj)
  finalNum = finalObj.filter(item => {
    return item[1] === 1
  })
  return finalNum[0][0];

}

console.log(uniqueNumber([1,2,1,3,3]));
module.exports = uniqueNumber;
