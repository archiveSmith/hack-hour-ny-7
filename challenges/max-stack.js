/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.index = 0;
  this.maxValue = null;
}

Stack.prototype.push = function(value) {  
  this.storage[this.index] = value;
  this.index++;
  if (value > this.maxValue) { this.maxValue = value };
  return this.storage;
};

Stack.prototype.pop = function() {
  this.index--;
  const output = this.storage[this.index];
  delete this.storage[this.index];
  return output;
}

Stack.prototype.getMax = function() {
  return this.maxValue;
}

module.exports = Stack;