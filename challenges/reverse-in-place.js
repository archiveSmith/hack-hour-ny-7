'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

// function reverseInPlace(array) {
//   let arr = [];
//   for (let i = array.length-1; i >= 0; i--) {
//     console.log(array[i]);
//     arr.push(array[i]);
//   }
//   return arr.join('');
// }

//iterate through array and compare first and last.
function reverseInPlace(array) {
  let countBack = 0;
  for (let i = 0; i < array.length; i++) {
    countBack--;
    array[i] = array[array.length-countBack];
  }
  return array;
}


/*
Alesi's solution

function reverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let left = array[i];
    let right = array[array.length - 1 - i];
    array[i] = right;
    array[array.length - 1 - i] = left;
  }

  return array;
}
*/
module.exports = reverseInPlace;
