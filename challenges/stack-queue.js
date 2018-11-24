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

/**
 * Create a stack.Then create a queue using two stacks.
 */

/*
Jonathan solution:

function Stack() {
  this.items = [];
}

Stack.prototype.push = function(item) {
  this.items.push(item);
};

Stack.prototype.pop = function() {
  return this.items.pop();
};

Stack.prototype.isEmpty = function() {
  return this.items.length;
};

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(item) {
  this.in.push(item);
};

Queue.prototype.dequeue = function() {
  if (this.out.isEmpty()) {
    while (!this.in.isEmpty()) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};


// alternate solution - not using array methods

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  return this.index;
}

Stack.prototype.pop = function(){
  let output = this.storage[--this.index];
  delete this.storage[this.index]
  return output;
}
/**
 * Queue Class
 */
function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(value){
  this.in.push(value);
  return this.in.index + this.out.index;
}

Queue.prototype.dequeue = function(value){
  if(this.out.index > 0) return this.out.pop();
  while(this.in.index > 1){
    this.out.push(this.in.pop());
  }
  return this.in.pop();
}
/*


module.exports = {Stack: Stack, Queue: Queue};















