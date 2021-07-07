// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i ++) {
    for (let j = i; j >= 1; j--) {
      //if at j is greater than the i...bubble backwards
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } 
      // else {
      //   break;
      // }
    }
  }
}

let arr = [5,4,3,2,1];
insertionSort(arr);
console.log(arr);

module.exports = insertionSort;