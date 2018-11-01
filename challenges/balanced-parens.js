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
    let squareArr = [];
    let parenArr = [];
    let curlyArr = []
    for (char of input) {
      console.log(char);
        switch (char){
            case '[':
                squareArr.push('[');
                break;
            case ']':
                if(squareArr.length === 0){
                  return false;
                }
                squareArr.pop();
                break;
            case '(':
                parenArr.push('(');
                break;
            case ')':
                if(parenArr.length === 0){
                  return false;
                }
                parenArr.pop();
                break;
            case '{':
                curlyArr.push('{');
                break;
            case '}':
                if(curlyArr.length === 0){
                  return false;
                }
                curlyArr.pop();
                break;
            default:
                break;
        }
    }
    console.log(squareArr);
    console.log(parenArr);
    console.log(curlyArr);
    if(squareArr.length === 0 && parenArr.length === 0 && curlyArr.length === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = balancedParens;
