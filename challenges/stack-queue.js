/**
 * Create a stack.Then create a queue using two stacks.
 */


// function Stack() {
//   this.storage = {};
//   this.index = 0;
// }

// Stack.prototype.push = function(value) {
//   this.storage[this.index] = value;
//   this.index++;
//   return this.storage;
// }
// //remove the latest one
// Stack.prototype.pop = function() {
//   let popstorage = this.storage[this.index-1];
//   delete this.storage[this.index-1];
//   this.index--;
//   return popstorage;
// }
// /**
// * Queue Class
// */


// function Queue() {
//   this.storage = {};
//   this.length = 0;
// }

// Queue.prototype.enqueue = function(value) {
//   this.storage[this.length] = value;
//   this.length++;
//   return this.storage;
// }
// //remove the first/oldest one
// Queue.prototype.dequeue = function() {
//   let dequeueStore = this.storage[0];
//   if (this.length === 0) return undefined;
//   for (let i=0; i<this.length; i++) {
//     this.storage[i] = this.storage[i+1];
//   }
//   delete this.storage[this.length-1];
//   this.length--;
//   return dequeueStore;
// }

let stack1 = []; let stack2 = [];

function Queue() {
  this.storage = {};
  this.length = 0;
}

function Enqueue(el) {
  stack1.push(el);
}
function Dequeue(el) {
  if (stack2.length===0) {
    if (stack1.length===0) return 'cannot dequeue because queue is empty';
    while (stack1.length > 0) {
      let x = stack1.pop();
      stack2.push(x);
    }
  }
  return stack2.pop;
}
//remove the first/oldest one
Queue.prototype.dequeue = function() {
  let dequeueStore = this.storage[0];
  if (this.length === 0) return undefined;
  for (let i=0; i<this.length; i++) {
    this.storage[i] = this.storage[i+1];
  }
  delete this.storage[this.length-1];
  this.length--;
  return dequeueStore;
}

module.exports = {Stack: Stack, Queue: Queue};
