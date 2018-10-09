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
var i = 0;

function balancedParens(input) {
  let openbrackets = ['(', '[', '{'];
  let closebrackets = [')', ']', '}'];

  if (openbrackets.includes(input.charAt(i))) {
    console.log(input.charAt(i));
    i++;
    return balancedParens(input.slice(1));
  }
}

module.exports = balancedParens;