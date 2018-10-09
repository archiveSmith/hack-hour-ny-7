/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true
 *
 * Step 2:
make your solution work for all types of brackets
 *
 * Example:
balancedParens('[](){}'); // true
balancedParens('[({})]');   // true
balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  if (input.length < 2) { return false };
  let parens = 0;
  let brackets = 0;
  let curly = 0;
  let carrot = 0;
  for (let i = 0; i < input.length; i++) {
    switch (input.charAt(i)) {
      case '(': 
        parens++;
        break;
      case ')': 
        parens--;
        break;
      case '[': 
        brackets++;
        break;
      case ']': 
        brackets--;
        break;
      case '<': 
        carrot++;
        break;
      case '>': 
        carrot--;
        break;
      case '{': 
        curly++;
        break;
      case '}': 
        curly--;
        break
      default: break;
    }
    if (parens < 0 || brackets < 0 || curly < 0 || carrot < 0) return false;
  }
  if (parens === 0 && brackets === 0 && curly === 0 && carrot === 0) return true;
  return false;
}

// // * Example:
// console.log(balancedParens('('));
// console.log(balancedParens('()'))
// console.log(balancedParens(')(')) 
// console.log(balancedParens('(())')) 

// // //  * Step 2:
// // // make your solution work for all types of brackets

// // //  * Example:
console.log(balancedParens('[](){}'))
console.log(balancedParens('[({})]'))  
console.log(balancedParens('[(]{)}'))

// // // Step 3:
// // // ignore non-bracket characters
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'))
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))


module.exports = balancedParens;
