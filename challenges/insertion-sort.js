// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    array.forEach( (cur, idx) => {
       while (idx - 1 >= 0 && array[idx - 1] > cur) {
         array[idx] = array[idx - 1];
         idx--;
       }
       array[idx] = cur;
     });
   
     return array;
   }

module.exports = insertionSort;