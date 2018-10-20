/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.length = 0;
  this.max = 0;
}

Stack.prototype.push = function(value) {
  this.stack[this.length] = value;
  if(value > this.max) this.max = value;
  return ++this.length;
}

Stack.prototype.pop = function() {
  this.length--;
  let returnValue = this.stack[this.length];
  delete this.stack[this.length];
  if(returnValue === this.max) {
    this.max = 0;
    for(let i in this.stack) {
      if(this.stack[i] > this.max) this.max = this.stack[i];
    }
  }
  return returnValue;
}

Stack.prototype.getMax = function() {
  if(this.length) return this.max;
}

module.exports = Stack;