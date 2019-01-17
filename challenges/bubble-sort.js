// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) swap(array, j, j + 1)
//     }
//   }
//   return array;
// }

let bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i)
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
let test = [5, 2, 3, 1];
// console.log(swap(test, 0, 3))
console.log(bubbleSort(test))

module.exports = bubbleSort;
