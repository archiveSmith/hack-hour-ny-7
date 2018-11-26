// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
let finalArr=[];
for (let i = 0; i<array.length; i++) {
    if (finalArr.length === 0) {
        finalArr.push(array[i])
    } else {
        finalArr.push(array[i]);
        finalArr.sort(function(a,b){
            return a-b
        })
    }
}
return finalArr
}

module.exports = insertionSort;