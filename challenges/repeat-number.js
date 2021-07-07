/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */


/*Set objects are collections of values, we can iterate through the elements of a set in insertion order. Values in sets only occur once. its unique to sets collection. NaN and undefines can be stored in sets. Can filter out NaN's even though NaN !== NaN in JS.
*/
function repeatNumbers(array) {
  let seen = new Set;
  return array.filter((item) => {
    if(!seen.has(item)) {
      seen.add(item);
      return item
    }
  })
}

/*
0(n) time O(1) space
whats happening is we want to take out the duplicate, expected gives us the sum of all numbers without the duplicate. we need to leave out one value so length-1 will remove one for us.
function repeatNumbers(array) {
  var expected = ((array.length-1) * array.length) / 2;
  var actual = 0;
  for (var i = 1; i < array.length; i++) {
  actual += array[i]
  }
  return actual - expected;
}

Look into the XOR option. => has to do with decimal and binary charts


function repeatNumbers(array) {
  var result = 0;
  for(var = 1; i < array.length; i++) {
    result = result ^ i ^ array[i];
    //result is 0. i is 0 and array[i] is ele, numbers are done in binary.
    //write out dec binary chart easier comparison.
    //numbers vertically taht are the same cancel each other out.
    //when you find a duplicate the binary number differs from the rest, so in the end you'll be left with the dup.
  }
  return result;
}

JOEl
// Brute Force - O(n^2) time, O(1) space
function repeatNumbers(array) {
  for (var i = 0; i < array.length; i ++) {
    for (var j = i + 1; j < array.length; j ++) {
      if (array[i] === array[j]) return array[i];
    }
  }
}

// O(n) time, O(n) space
function repeatNumbers(array) {
  var store = {};

  for(var i = 0; i < array.length; i ++) {
    if (array[i] in store) return array[i];
    store[array[i]] = true;
  }
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  var expected = ( ( array.length - 1 ) * array.length ) / 2;
  var actual = 0;

  for (var i = 0; i < array.length; i ++) {
      actual += array[i];
  }

  return actual - expected;
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  var result = 0;

  for (var i = 0; i < array.length; i ++) {
    result = result ^ i ^ array[i];
  }
  return result;
}

*/

module.exports = repeatNumbers;



























