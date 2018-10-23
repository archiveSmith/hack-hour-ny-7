/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.length = 0;
  this.largestValue = undefined;
}

Stack.prototype.push = function (val) {
  this.storage[this.length] = val;
  this.length++;
  if (this.largestValue === undefined) {
    this.largestValue = val;
  }

  if (val > this.largestValue) {
    this.largestValue = val;
  }
  return this.length;
}

Stack.prototype.pop = function () {
  let poppedVal = this.storage[this.length - 1];
  this.storage[this.length - 1] = undefined;
  this.length--;
  if (this.largestValue === poppedVal) {
    this.largestValue = this.storage[0];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] > this.largestValue) {
        this.largestValue = this.storage[i];
      }
    }
  }
  return poppedVal;
}

Stack.prototype.getMax = function () {
  return this.largestValue;
}

module.exports = Stack;