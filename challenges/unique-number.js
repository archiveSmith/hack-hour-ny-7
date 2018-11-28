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
  let numObj = {};

  for(let i = 0; i < array.length; i++){
    if(!numObj[array[i]]){
      numObj[array[i]] = true;
    }else{
      numObj[array[i]] = false;
    }
  }

  for(let num in numObj){
    if(numObj[num] === true){
      return num;
    }
  }
}

// console.log(uniqueNumber([2, 4, 3 , 9, 2, 4, 3]))

module.exports = uniqueNumber;
