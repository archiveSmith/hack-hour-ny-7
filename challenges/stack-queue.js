/**
 * Create a stack.Then create a queue using two stacks.
 */


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

// function Stack() {
//   this.storage = {};
//   this.index = 0;
// }

// Stack.prototype.push = function(value) {
//   this.storage[this.index++] = value;
//   return this.index;
// }

// Stack.prototype.pop = function(){
//   let output = this.storage[--this.index];
//   delete this.storage[this.index]
//   return output;
// }
// /**
//  * Queue Class
//  */
// function Queue() {
//   this.in = new Stack();
//   this.out = new Stack();
// }

// Queue.prototype.enqueue = function(value){
//   this.in.push(value);
//   return this.in.index + this.out.index;
// }

// Queue.prototype.dequeue = function(value){
//   if(this.out.index > 0) return this.out.pop();
//   while(this.in.index > 1){
//     this.out.push(this.in.pop());
//   }
//   return this.in.pop();
// }

module.exports = {Stack: Stack, Queue: Queue};
