// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    let value = array[i]
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = value
  }

  return list
}

module.exports = insertionSort;