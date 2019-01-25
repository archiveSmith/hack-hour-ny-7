/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// O(n) time
function findInOrderedSet(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

// O(log n) time
function findInOrderedSet(arr, target) {
  function binSearch(start, end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;
    if (end === start) return false;
    if (arr[mid] > target)
      return binSearch(start, mid - 1);
    else
      return binSearch(mid + 1, end);
  }
  return binSearch(0, arr.length - 1);
}

function findInOrderedSet(array, int) {
  if (array.length === 1) return array[0] === int;
  const midpoint = Math.floor(array.length / 2);
  // if the element at the midpoint is greater than the target, search the left side
  // if the element at the midpoint is less than the target, search the right side
  return array[midpoint] > int
    ? findInOrderedSet(array.slice(0, midpoint), int)
    : findInOrderedSet(array.slice(midpoint), int);
}

module.exports = findInOrderedSet;
