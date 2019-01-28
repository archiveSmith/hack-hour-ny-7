// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



// function bubbleSort(array) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     let swapped = false;
//     for (let j = 0; j < i; j++) {
//       if (array[j] > array[j+1]) {
//         swapped = true;
//         let temp = array[j+1];
//         array[j+1] = array[j];
//         array[j] = temp;
//       }
//     }
//     if (!swapped) return array;
//   }
//   return array;
// }

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

console.log(bubbleSort([12,23,1,555,3,11,4,2]));

module.exports = bubbleSort;
