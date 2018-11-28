// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    let value = array[i];
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      // loop through the array in the sorted array (the array from the current to the beginning)
      // copy each item to the next one
      array[j + 1] = array[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    array[j + 1] = value;
  }

  return list;
}

function insertionSort(array) {
  //1. iterate over all numbers
  for (let i = 1; i < array.length; i++) {
    //2. take out a current number to compare it with other numbers
    let temp = array[i];
    let j = i;
    //3. start moving move backwards from the index of current number, but move only as long as current number is greater than
    while (j > 0 && temp < array[j - 1]) {
      array[j] = array[j - 1];
      j--;
    }
    //4. when the swaps are done that means this is the place to insert the number
    array[j] = temp;
  }
  return array;
}
module.exports = insertionSort;
