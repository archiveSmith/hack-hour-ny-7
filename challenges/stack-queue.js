/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
}

Stack.prototype.pop = function () {
  return this.stack.pop();
}

Stack.prototype.push = function (item) {
  this.stack.push(item);
}

Stack.prototype.size = function () {
  return this.stack.length;
}

/**
* Queue Class
*/



function Queue() {
  this.inbox = [];
  this.outbox = [];
}

Queue.prototype.push = (value) => {
  this.inbox.push(value);
};

Queue.prototype.pop = (value) => {
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

Queue.this.inbox(3);
console.log(inbox);

// implement enqueue method by using only stacks
// and the push and pop functions


// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2


module.exports = { Stack: Stack, Queue: Queue };
