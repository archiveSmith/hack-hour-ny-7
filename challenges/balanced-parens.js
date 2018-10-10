function balancedParens(input){
    // store parens in object as key:value pairs
    var matches = {'[':']', '{':'}', '(':')'};
    // create a stack
    var stack = [];
    // check each character of string
    for (var i = 0; i < input.length; i++) {
      // grab character
      let char = input[i];
      // if character is equal to a open paren, push into stack
      if (matches.hasOwnProperty(char)) { // could use the in operator but would likely be less efficient
        stack.push(char);
      // if closing paren
      } else if (char === ']' || char === ')' || char === '}'){
        // see if it is closing to the last value pushed to the stack. if not, it's not balanced
        if (matches[stack.pop()] !== char){
          return false;
        }
      }
    }
    // if we have popped all opening parens off stack, it is balanced
    return !stack.length;
  }


console.log(balancedParens('[][]{}'))
console.log(balancedParens('[{()}]'))
console.log(balancedParens('[{](}]'))