// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      while (array[j+1] < array[j]){
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
    
  }
  return array
}


console.log(insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]));
module.exports = insertionSort;