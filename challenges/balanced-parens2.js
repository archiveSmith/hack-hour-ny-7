function balancedParens(str) {
  str = str.replace(/[^(){}[\]]/g, '')
  console.log('str: ', str)
  let stack = [];
  for (x in str) {
    if (str[x] === '(' || str[x] === '[' || str[x] === '{') {
      stack.push(str[x])
    } else if (str[x] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop(str[x])
      } else {
        return false;
      }
    } else if (str[x] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop(str[x])
      } else return false;
    } else if (str[x] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop(str[x])
      } else return false;
    }
  }
  console.log('result:', stack)
  return console.log(stack.length > 0 ? false : true)
}

// balancedParens('(');  // false
// balancedParens('()'); // true
// console.log(balancedParens(')('));  // false ***
// balancedParens('(())');  // true
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false

// console.log(balancedParens('a(b]'))
// console.log(balancedParens('(a[s)f'))
// console.log(balancedParens('fd{ss3))4}}'))
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
balancedParens(' var hubble = function() { telescopes.awesome();');