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
  
    let opener = 0;
    let closer = 0;
  
    let open = false;
    let close = false;
  
    return inputI.reduce((acc, cur, idx) => {
      acc = inputI[idx - 1];
      console.log('cur', cur, 'acc', acc)
  
      if (cur === '(' || cur === '{' || cur === '[') {
        open = true;
        close = false;
        opener++;
      }
      else if (cur === ')' || cur === '}' || cur === ']') {
        open = false;
        close = true;
        closer++;
      }
  
      if (cur === '(' && acc === ']' || cur === '(' && acc === '}') {
        return false;
      }
  
      if (cur === '[' && acc === ')' || cur === '[' && acc === '}') {
        return false;
      }
  
      if (cur === '{' && acc === ')' || cur === '{' && acc === ']') {
        return false;
      }
  
    })
  
    if (closer === opener) {
      return false;
    }
    else if (closer !== opener) {
      return true;
    }
  
  }


module.exports = balancedParens;
