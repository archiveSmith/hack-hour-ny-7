/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let arrCopy = arr;
  if (arrCopy.length === 1) {
    return arrCopy[0] === target 
  }
  let midpoint = arrCopy[Math.ceil(arr.length /2)];
  let leftSide = arrCopy.splice(0, Math.ceil(arr.length /2));
  let rightSide = arrCopy;
  if (target === midpoint) return true;
  if (target < midpoint) return findInOrderedSet(leftSide, target);
  if (target > midpoint) return findInOrderedSet(rightSide, target);

}

var nums = [1, 4, 6, 7, 9, 17, 45, 50]
console.log(findInOrderedSet(nums, 48));

module.exports = findInOrderedSet;
