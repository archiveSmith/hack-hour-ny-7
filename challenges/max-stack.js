/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.max;
  this.length = 0;
  this.stack = {};
}
Stack.prototype.push = function(element) {
  this.stack[this.length] = element;
  this.length++;

  if(!this.max || element >= this.max) {
    this.max = element;
  }

  return this.length;
}
Stack.prototype.pop = function() {
  if(this.length === 0) return false;

  let popped = this.stack[--this.length];
  delete this.stack[this.length];

  if (this.length === 0) {
    this.max = undefined;
  } 
  else if (this.max === popped) {
    let newMax = this.stack[0];
    for (let i = 1; i < this.length; i ++){
      if (this.stack[i] > newMax) newMax = this.stack[i];
    }
    this.max = newMax;
  }

  return popped;
}
Stack.prototype.getMax = function() {
  return this.max;
}
Stack.prototype.toString = function() {
  return JSON.stringify(this.stack);
}

module.exports = Stack;