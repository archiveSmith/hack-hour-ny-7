/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if(arr[0] === target){return true}
  if(arr[arr.length - 1] === target){return true}

  let min = 0;
  let max = arr.length - 1;
  let guess;

  while(max > min){
    guess = (min + max)/2;
    // console.log('---guess---', guess, arr[guess]);

    if(arr[guess] === target || arr[guess + 1] === target || arr[guess - 1] === target){
      return true;
    }else if(arr[guess] < target){
      min = guess + 1;
    }else{
      max = guess - 1;
    }
  }

  return false;
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));  
// console.log(findInOrderedSet(nums, 2)); 

module.exports = findInOrderedSet;
