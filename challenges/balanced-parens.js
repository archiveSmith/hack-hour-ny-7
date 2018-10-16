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
  let obj = {};
  for(let i = 0; i < str.length; i++) {

    if(str[i] === '{' && obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else if (obj[str[i]] > 1) {
      obj[str[i]] += 1;
    }

    if(str[i] === '[' && obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else if (obj[str[i]] > 1) {
      obj[str[i]] += 1;
    }

    else if(str[i] === '(' && obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else if(obj[str[i]] > 1) {
      obj[str[i]] += 1;
    }
    console.log(obj)
  }
  return obj;
}

//Davids solution using stack array.
// function balancedParens(input){
//     // store parens in object as key:value pairs
//     var matches = {'[':']', '{':'}', '(':')'};
//     // create a stack
//     var stack = [];
//     // check each character of string
//     for (var i = 0; i < input.length; i++) {
//       // grab character
//       let char = input[i];
//       // if character is equal to a open paren, push into stack
//       if (matches.hasOwnProperty(char)) { // could use the in operator but would likely be less efficient
//         stack.push(char);
//       // if closing paren
//       } else if (char === ']' || char === ')' || char === '}'){
//         // see if it is closing to the last value pushed to the stack. if not, it's not balanced
//         if (matches[stack.pop()] !== char){
//           return false;
//         }
//       }
//     }
//     // if we have popped all opening parens off stack, it is balanced
//     return !stack.length;
//   }




console.log(balancedParens('[][]{}'))
console.log(balancedParens('[{()}]'))
console.log(balancedParens('[{](}]'))

module.exports = balancedParens;
