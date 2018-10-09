/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

//another solution

function balancedParens(input) {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '[' || input[i] === '(' || input[i] === '{') {
      count++
    }
    if (input[i] === ']' || input[i] === ')' || input[i] === '}') {
      count--
    }
  }
  if (count === 0) {
    return true
  } else {
    return false
  }
}
// function balancedParens(input) {
//   let counterRight = 0
//   let counterLeft = 0
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === '[' || input[i] === '(' || input[i] === '{') {
//       counterLeft++
//     }
//     if (input[i] === ']' || input[i] === ')' || input[i] === '}') {
//       counterRight++
//     }
//   }
//   if (counterRight === counterLeft) {
//     return true
//   } else {
//     return false
//   }
// }

module.exports = balancedParens;
