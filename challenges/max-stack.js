/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  this.storage: [],
  this.length: 0,
  this.largestValue = undefined,
}

Stack.prototype.push() {
  
}

let stack = new Stack();
console.log(stack.push(3));

module.exports = Stack;