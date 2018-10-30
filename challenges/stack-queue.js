/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.length = 0;
}

let stack1 = Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

let stack2 = Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length__;
}

/**
* Queue Class
*/


function Queue() {
  this.storage = {};
  this.index = 0;
}

Queue.prototype.enqueue = function(value) {
  stack1.push(value);
  stack2.push(value);
}

Queue.prototype.dequeue = function() {
  if(stack2.length === 0 && stack1.length === 0) {
    return 'Cannot dequeue because queue is empty'
  }
  while(stack1.length > 0) {
    let p = stack1.pop();
    stack2.push(p)
  }
  return stack2.pop();
}

/*
  A stack and queue both do similar things, they have a push and a pop. Difference is stacks behavior is first in last out, while queue's behavior is first in first out.

  if we push a,b,c into a stack while implementing a queue we want the letters to come out as a,b,c. but stacks will return c,b,a. Therefore we need two stacks or empty arrays and store each popped element in first stack and store them in second stack. Then we pop the elements in second stack and return them in the Queue.prototype.dequeue = function() {...}
*/


module.exports = {Stack: Stack, Queue: Queue};















