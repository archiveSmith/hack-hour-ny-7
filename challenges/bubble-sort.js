// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!array || array.length === 0) {
    return false;
  }

  let continueLoop = true;
  while(continueLoop) {
    continueLoop = false;
    for(let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        let temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;

        continueLoop = true;
      }
    }
  }
  return array;
}

let array = [6, 5, 4, 3, 2, 1];
console.log(bubbleSort(array));

module.exports = bubbleSort;
