// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    let j = i
    while (array[j - 1] > array[j] && j > 0) {
      array[j] = array[j - 1];
      array[--j] = curr;
    }
  }
  return array;
}

module.exports = insertionSort;