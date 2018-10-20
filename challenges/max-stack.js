/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  // body...
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack[this.stack.length] = item;
    return this.stack.length;
  }

  pop() {
    let newArr = [];
    let removeItem;
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] === this.stack[this.stack.length - 1]) {
        removeItem = this.stack[i];
      } else {
        newArr[newArr.length] = this.stack[i];
      }
    }
    this.stack = newArr;
    return removeItem;
  }

  getMax() {
    let max = 0;
    for (let i = 0; i < this.stack.length; i++) {
      if (max === 0) {
        max = this.stack[i];
      }
      if (max < this.stack[i]) {
        max = this.stack[i];
      }
    }
    return max;
  }
}

// const newStack = new Stack;

// newStack.push(11);
// newStack.push(15);
// newStack.push(1);
// newStack.push(2);
// newStack.push(9);
// newStack.pop();
// console.log(newStack.getMax());

module.exports = Stack;