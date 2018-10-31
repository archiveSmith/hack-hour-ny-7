/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function(val) {
  let poppedVal = this.storage[this.length-1];
  this.storage = this.storage.slice(0, this.storage.length-1);
  this.length--;
  return poppedVal;
}

/**
* Queue Class
*/


function Queue() {
  this.queue = new Stack();
}

Queue.prototype.enqueue = function(){
  this.queue.pop.apply(queue, arguments);
  return this.queue.reverse();
}
Queue.prototype.dequeue = function(val){
  this.queue.push.apply(queue, val);
  return this.queue.storage.reverse();
}


// let stack = new Stack();
// stack.push(5);
// stack.push(4);
// stack.push(1);
// stack.pop();
// console.log(stack);

let queue = new Queue();
queue.stack.push(5);
console.log(queue)
module.exports = {Stack: Stack, Queue: Queue};
