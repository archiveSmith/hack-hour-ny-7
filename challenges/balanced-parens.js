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
    let chars = input.split('');
    let openers = ['{','[','('];
    let closers = ['}',']',')'];
    let tracker = [];
    
    for(let i = 0; i < chars.length; i++){
        if(openers.indexOf(chars[i]) >-1){
            tracker.push(chars[i]);
        } else if (closers.indexOf(chars[i]) > -1){
            let temp = tracker.pop();
            if (openers.indexOf(temp) != closers.indexOf(chars[i])){
                return false;
            }
        }
    }

    return tracker.length === 0;
}



module.exports = balancedParens;
