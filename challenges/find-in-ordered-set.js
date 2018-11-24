/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

//https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
function findInOrderedSet(arr, target) {
  let min = 0;
  let max = array.length - 1;
  console.log(max);
  let guess;
  while(min < max) {
    //if last index 24, we want 12 and check if target is in there. if not, ending number + 1 and start at 13 to 24. if not half again.
    guess = Math.floor((max + min) / 2);
    //if 12th index is target. return
    if(array[guess] === target) {return true;}
    else if (array[guess] < target) {
      min = guess + 1; //+ 1 and start next index half.
    }
    else {
      max = guess - 1;
    }
  }
  return false;
}


module.exports = findInOrderedSet;
