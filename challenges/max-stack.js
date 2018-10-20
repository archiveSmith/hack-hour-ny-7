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
}

Stack.prototype.push = function(value) {  
  this.storage[this.index] = value;
  this.index++;
  return this.storage.length;
};

Stack.prototype.pop = function() {
  this.index--;
  const output = this.storage[this.index];
  delete this.storage[this.index];
  return output;
}

Stack.prototype.getMax = function() {
  if (this.storage.length = 0) { return undefined }
  return this.storage.slice().sort((a, b) => b - a)[0];
}

module.exports = Stack;