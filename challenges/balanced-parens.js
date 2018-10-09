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

function balancedParens(input) {
    let inputI = input.split('');
    let reduceStatus = true;
  
    let inputReduce = inputI.reduce((acc, cur, idx) => {
      acc = inputI[idx - 1];
  
      if (acc === '(' && cur === ']' || acc === '(' && cur === '}') {
        reduceStatus = false;
      }
  
      if (acc === '[' && cur === ')' || acc === '[' && cur === '}') {
        reduceStatus = false;
      }
  
      if (acc === '{' && cur === ')' || acc == '{' && cur == ']') {
        reduceStatus = false;
      }
  
    });
  
    if (reduceStatus) {
      return true;
    }
  
    if (!reduceStatus) {
      return false;
    }
  }

module.exports = balancedParens;
