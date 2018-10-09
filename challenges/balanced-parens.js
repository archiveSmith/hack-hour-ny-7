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
     debugger;
     for (let i = 0; i < input.length; i++) {
         if (input[i] === "{") {
             let sub =  input.substr(i);
             console.log(sub)
             let rightBracket = sub.indexOf("}");
             if (rightBracket === -1) return false;
             console.log(sub.substr(0, rightBracket+1));
             if (!eval(sub.substr(0, rightBracket+1))) return false;
         }
         if (input[i] === "[") {
             let sub =  input.substr(i);
             console.log(sub)
             let rightSquareBracket = sub.indexOf("]");
             if (rightSquareBracket === -1) return false;
             console.log(sub.substr(0, rightSquareBracket+1));
             if (!eval(sub.substr(0, rightSquareBracket+1))) return false;
         }
         if (input[i] === "(") {
             let sub =  input.substr(i);
             console.log(sub)
             let rightParen = sub.indexOf(")");
             if (rightParen === -1) return false;
             console.log(sub.substr(0, rightParen+1));
             if (eval(sub.substr(0, rightParen+1)) !== undefined) return false;
         }
     }
     return true;
 }

// function balancedParens(input){
//     let cache = {
//         "{": 0,
//         "}": 0,
//         "(": 0,
//         ")": 0,
//         "[": 0,
//         "]": 0,
//     }

//     for (let i = 0; i < input.length; i++) {
//         console.log(input[i])
//         if (cache[String(input[i])] !== undefined) {
//             console.log("yes");
//             cache[String(input[i])] += 1;
//         }
//     }
//     console.log(cache);
//     if (cache['['] !== cache[']'] || cache['('] !== cache[')'] || cache['{'] !== cache['}']) {
//         return false;
//     } else {
//         return true;
//     }
// }

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}'));
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}}')); // false
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
module.exports = balancedParens;
