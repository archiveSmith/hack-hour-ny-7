/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.length = 0;
}
Stack.prototype.push = function (element) {
  if (!element) {
    return false;
  }
  this.stack.push(element);
  this.length++;
  return element;
}
Stack.prototype.pop = function () {
  if(this.length === 0) {
    return false;
  } 
  let result = this.stack.pop();
  this.length--;
  return result;
}
Stack.prototype.toString = function () {
  return this.stack;
}


/**
* Queue Class
*/


function Queue() {
  this.enqueueStack = new Stack;
  this.dequeueStack = new Stack;
  this.length = 0;
}
Queue.prototype.enqueue = function (element) {
  if (!element) {
    return false;
  }
  this.enqueueStack.push(element);
  this.length++;
  return element;
}
Queue.prototype.dequeue = function () {
  if (this.length === 0){
    return false;
  }
  while(this.enqueueStack.length != 0) {
    this.dequeueStack.push(this.enqueueStack.pop());
  }
  let result = this.dequeueStack.pop();
  while (this.dequeueStack.length != 0) {
    this.enqueueStack.push(this.dequeueStack.pop());
  }
  this.length--;
  return result;
}
Queue.prototype.toString = function () {
  return (this.enqueueStack.stack + ", " + this.length);
}


module.exports = {Stack: Stack, Queue: Queue};
