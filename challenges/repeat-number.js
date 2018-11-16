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
//keep splitting array in half and comparing for O(1)time?
let seen = new Set;
return array.filter((item) => {
  if(!seen.has(item)) {
    seen.add(item);
    return item
  }
})
}

module.exports = repeatNumbers;
