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

// function balancedParens(input) {
//   let left = input.slice(0, input.length / 2);
//   let stack = [];
//   let map = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//   };

//   for (let i = 0; i < input.length; i++) {
//     console.log("element ", input[i]);

//     if (input[i] === "(" || input[i] === "{" || input[i] === "[") {
//       console.log("stack ", stack);
//       stack.push(input[i]);
//       console.log("stack after", stack);
//     } else if (input[i] === ")" || input[i] === "}" || input[i] === "]") {
//       let popped = stack.pop();
//       console.log("popped ", popped);
//       if (map[popped] !== input[i]) {
//         return false;
//         console.log(input[i]);
//       }
//       console.log(stack);
//       return true;
//     }
//   }
// }

// module.exports = balancedParens;
