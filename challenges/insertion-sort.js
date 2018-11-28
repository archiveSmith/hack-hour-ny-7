// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if(!array) {return array;}
  let unsorted; 

  for(let i = 0; i < array.length; i++){
    unsorted = array[i];
    console.log('1stArray', array[i]);
    for(let j = i - 1; j >= 0; j--){
      console.log('2ndArray', array[j], j);
      if(array[j] === array[i] || array[j] < array[i]){
        array[j + 1] = array[i];
        break;
      }else{
        array[j + 1] = array[j];
      }
    }
    console.log('array', array)
  }

  return array;
}

console.log(insertionSort([2, 34, 345, 23, 13, 34, 4, 43, 44, 133, 1, 34, 4, 5, 56, 6, 8]));

module.exports = insertionSort;