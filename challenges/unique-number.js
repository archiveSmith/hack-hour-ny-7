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
  if (!array) {
    return false;
  }


  let countingObject = array.reduce((acc, cur) => {
    if(acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  },{});


  for(let key in countingObject) {
    if (countingObject[key] === 1){
      return Number(key);
    }
  }
}

console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
