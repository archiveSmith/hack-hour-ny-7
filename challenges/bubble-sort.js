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
    for(let i = 0; i < array.length - 1 ; i++) {
      if(array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}


function bubbleSort(array) {
  for(let i = 0; i < array.length - 1; i+=1) {
    let swapped = false;
    for (let j = 0; j < array.length - 1 - i; j+=1) {
      if (array[j] > array[j+1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) return array;
  }
  return array;
}

console.log(bubbleSort([12,23,1,555,3,11,4,7,2,1,5]));

module.exports = bubbleSort;
