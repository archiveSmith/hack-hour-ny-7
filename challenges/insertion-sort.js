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

module.exports = insertionSort;
