/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];

  this.push = (item) => {
    this.stack[this.stack.length] = item;

    return this.stack;
  }

  this.pop = () => {
    poppedVal = this.stack 
    

    return poppedVal;
  }
  
  return this.stack;
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
