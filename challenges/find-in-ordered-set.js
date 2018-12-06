/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  //binary search
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let midpoint;


  while (leftIndex !== rightIndex) {
    console.log(leftIndex);
    console.log(rightIndex);
    midpoint = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midpoint]) {
      return true;
    }
    else if (target > arr[midpoint]) {
      leftIndex = midpoint;
    }
    else if (target < arr[midpoint]) {
      rightIndex = midpoint;
    }

    if(leftIndex === rightIndex - 1) {
      //check all 3
      if (target === arr[leftIndex] || target === arr[midpoint] || target === arr[rightIndex]) {
        return true;
      } else {
        return false;
      }
    }
  }

  return false;
}

let nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 46));

module.exports = findInOrderedSet;
