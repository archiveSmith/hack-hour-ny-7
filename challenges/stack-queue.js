/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.stack = [];

  return this.stack;
}

Stack.prototype.push = function(item) {
  this.stack[this.stack.length] = item;
};

Stack.prototype.pop = function() {
  let newArray = [];
  let poppedVal;

  for (let i = 0; i < this.stack.length; i++) {
    if (this.stack[i] === this.stack[this.stack.length - 1]) {
      poppedVal = this.stack[this.stack.length - 1];
    }else{
      newArray[newArray.length] = this.stack[i];
    }
  }

  this.stack = newArray;
  return poppedVal;
};

/**
 * Queue Class
 */

function Queue() {
  this.stackA = new Stack();
  this.stackB = new Stack();
}

Queue.prototype.enqueue = function(item) {
  this.stackA.push(item);

  return this.stackA;
};

Queue.prototype.dequeue = function() {
  let item;

  if (this.stackB.length !== 0) {
    item = this.stackB.pop();
  } else {
 
    while(this.stackA.length !== 0){
      item = this.stackA.pop();
      this.stackB.push(item);
    }

    item = this.stackB.pop();
  }

  return item;
};

// const newQueue = new Queue();

// newQueue.enqueue(4);
// newQueue.enqueue(12);
// newQueue.enqueue(5);
// newQueue.enqueue(34);
// newQueue.enqueue(23);
// newQueue.dequeue();
// console.log("---QUEUE---", newQueue);

module.exports = { Stack: Stack, Queue: Queue };
