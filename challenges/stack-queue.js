/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack(val) {
  this.stack = [];
  this.stack.push(val);
  this.stack.pop();
}

/**
 * Queue Class
 */

function Queue() {
  let stack1 = new Stack();
  let stack2 = new Stack();
  this.queue = [];
  stack2.push(stack1.pop());
  this.queue.push(stack2.pop());
}

module.exports = { Stack: Stack, Queue: Queue };
