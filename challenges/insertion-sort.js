// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1, j; i < array.length; i++) {
    let value = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > value) {
      array[j+1] = array[j];
      j-=1;
    }
    array[j+1] = value;
  }
  return array
}

module.exports = insertionSort;