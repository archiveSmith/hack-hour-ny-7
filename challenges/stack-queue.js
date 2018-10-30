/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {    
    let storage = [];

    this.push = function() {
        storage.push.apply(storage, arguments);
    };
    this.pop = function() {
        return storage.pop.apply(storage, arguments);
    };
    this.size = function() {
        return storage.length;
    };
    this.peek = function() {
        return storage;
    };
}


/**
* Queue Class
*/


function Queue() {

    let stack1 = new Stack();
    let stack2 = new Stack();

    this.eneque = function() {
        stack1.push.apply(stack1, arguments);
    };
    this.dequeue = function() {
        if (stack2.size() === 0) {
            while (stack1.size())
                stack2.push(stack1.pop());
        }
        return stack2.pop();
    };
    this.size = function(){
      return stack1.size() + stack2.size();
    };
    this.peek = function() {
        return stack2.peek();
    };
}

module.exports = {Stack: Stack, Queue: Queue};
