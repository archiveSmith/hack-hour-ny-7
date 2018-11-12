/**
 * Create a stack.Then create a queue using two stacks.
 */


let stack1 = new Stack();
let stack2 = new Stack();

function Stack() {    
    this.storage = [];
    this.index = 0;
}


Stack.push = () => {
    return storage.push.apply(storage, arguments);
};

Stack.pop = () => {
    return storage.pop.apply(storage, arguments);
}

Stack.size = () => {
    return storage.length;
}

Stack.peek = () => {
    return storage;
}

/**
* Queue Class
*/


function Queue() {
    this.storage = {};
    this.length = 0;
}

Queue.eneque = () => {
    stack1.push.apply(stack1, arguments);
};
Queue.dequeue = () => {
    if (stack2.size() === 0) {
        while (stack1.size())
            stack2.push(stack1.pop());
    }
    return stack2.pop();
};

Queue.size = () => {
  return stack1.size() + stack2.size();
};
Queue.peek = () => {
    return stack2.peek();
};

module.exports = {Stack: Stack, Queue: Queue};
