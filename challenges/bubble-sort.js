// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped;
  let length = array.length;
  let swapNum;
  
  do{
    console.log('HERE: ', array);
    swapped = false;

    for(let i = 1; i <= length; i++){
      if(array[i - 1] > array[i]){
        swapNum = array[i];
        array[i] = array[i - 1];
        array[i - 1] = swapNum;
        swapped = true;
      }
    }
  }while(swapped);

  return array;
}

// console.log(bubbleSort([2, 56, 3, 53, 23, 4, 12, 5, 12, 45, 65, 3]));
// [2, 3, 3, 4, 5, 12, 12, 23, 45, 53, 56, 65]

module.exports = bubbleSort;
