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

console.log('Hello from balanced-parens!!');

function balancedParens(input){
//   -if the length of input param equals 1 then return false...
  if (input.length === 1) {
      return false;
  }

//   -if the first char in the input param equals to the right parens and the input param is greater than 1 then...
  if (input[0] === ')' && input.length > 1) {
    return false;
  }

//   -if the first char in the input param equals the left parens and the second char equals the right parens and the length of the input param equals 2 then...
  if (input[0] === '(' && input[1] === ')' && input.length === 2) {
    return true;
  }

//   -start iterating through string param 
//     -declare a variable named 'cache' and assing it the current char being processed  = '('
//   -end of string iteration

}

console.log('result of balancedParens >>>', balancedParens('('));

module.exports = {
  balancedParens
};
