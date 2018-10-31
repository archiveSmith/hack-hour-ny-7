/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

}


/**
* Queue Class
*/


function Queue() {
<<<<<<< HEAD
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
=======

}

>>>>>>> 82a55f130a3a545b2973053ecc21466fba7b06ce
module.exports = {Stack: Stack, Queue: Queue};
