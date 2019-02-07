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

function balancedParens(input) {
  const openParens = ['(', '[', '{'];
  const closedParens = [')', ']', '}'];

  let cache = []; // cache to remember previous parens
  let parensContainer= []; // array to collect the parens from input string
  let matchOpenParens, char;

  // Loop is meant to fill the parensContainer array with existing brackets from the input string
  for (let i = 0; i < input.length; i += 1) {
    if (openParens.indexOf(input[i]) > -1) {
      parensContainer.push(input[i]);
    }
    else if (closedParens.indexOf(input[i]) > -1) {
      parensContainer.push(input[i]);
    }
  }

  if (parensContainer.length <= 1) {
      return false;
  }

  for (let i = 0; i < parensContainer.length; i += 1) {
    char = parensContainer[i];

    if (closedParens.indexOf(char) > -1) {
      matchOpenParens = openParens[closedParens.indexOf(char)];
      if (cache.length === 0 || (cache.pop() !== matchOpenParens)) {
        return false;
      }
    }

    else {
      cache.push(char);
    } 

  }
  return (cache.length === 0);

}

console.log('result of balancedParens >>>', balancedParens('function(), object {}, [array]'));

module.exports = {
  balancedParens
};
