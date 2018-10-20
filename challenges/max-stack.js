/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.top = null;
  this.size = 0;
};

function Node(data) {
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function (data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function () {
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};


module.exports = Stack;
