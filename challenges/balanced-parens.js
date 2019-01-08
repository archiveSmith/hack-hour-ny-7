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

function balancedParens(input){
  input = input.split('');
  let stack = [];
  let brackets = ['(',')','{','}','[',']']
  for(let char of input) {
    if(brackets.includes(char)) {
      switch(char) {
        case '(':
          stack.push(char);
          break;
        case ')':
          if(stack.pop() !== '(') return false;
          break;
        case '{':
          stack.push(char);
          break;
        case '}':
          if(stack.pop() !== '{') return false;
          break;
        case '[':
          stack.push(char);
          break;
        case ']':
          if(stack.pop() !== '[') return false;
          break;
        default: 
          console.log('invalid character');
          return;
      }
    }
  }
  return true;
}

module.exports = balancedParens;
