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

// const insertionSort2 = array => {
//   // Loop forwards in the array from index 1
//   for (let i = 1; i < array.length; i++) {
//     let j = i;
//     let temp;

//     // if swap is needed - store it into a temp variable
//     // else - go to the next iteration of the loop
//     if (array[j] < array[j - 1]) temp = array[j];
//     else continue;

//     // as long as temp element is smaller than the previous
//     // in the array - pull the previous 1 position to the right
//     while (temp < array[j - 1] && j > 0) {
//       array[j] = array[j-1];
//       j--;
//     }
//     // insert temp back into the array into the proper position
//     array[j] = temp;
//   }
//   return array;
// }

module.exports = insertionSort;