/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.values = {};
  this.length = 0;
}

Stack.prototype.push = function(input) {
  this.values[this.length++] = input;
  return this.length;
};

Stack.prototype.pop = function() {
  let returnValue = this.values[--this.length];
  delete this.values[this.length];
  return returnValue;
};


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack;
  this.stack2 = new Stack;
}

Queue.prototype.enqueue = function(input) {
  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  this.stack1.push(input);
  while(this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return this.stack1.length;
}

Queue.prototype.dequeue = function() {
  return this.stack1.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
