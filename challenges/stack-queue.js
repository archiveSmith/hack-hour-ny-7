/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {};
    this.top = 0;

    this.push = function(num){
        this.storage[this.top++] = num;
    }

    this.pop = function(){
        if(this.top > 0){
            let temp = this.storage[--this.top];
            delete this.storage[this.top];
            return temp;
        }
    }
}


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();  
    
  this.enqueue = function (item) {
    this.stack1.push(item);
  }

  this.dequeue = function() {
    if (this.stack2.top === 0) {

      
      while (this.stack1.top > 0) {
        const neweststack1Item = this.stack1.pop();
        this.stack2.push(neweststack1Item);
      }

      
      if (this.stack2.top === 0) {
        return undefined;
      }
    }
    return this.stack2.pop();
  }
}




module.exports = {Stack: Stack, Queue: Queue};
