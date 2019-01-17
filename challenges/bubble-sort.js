// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        swapped = true;
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
    if (!swapped) return array;
  }
  return array;
}

// console.log(bubbleSort([]));

module.exports = bubbleSort;
