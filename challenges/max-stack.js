/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0
  this.store = {}
  this.max = {
    idx: 0,
    val: Number.NEGATIVE_INFINITY
  };
}

Stack.prototype.push = function (value) {
  if (value > this.max.val) {
    this.max.idx = this.length;
    this.max.val = value;
  }
  this.store[this.length] = value;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function () {
  if (this.length === 0) return undefined;
  else {
    let popped = this.store[this.length - 1]
    if (popped === this.max.val) {
      this.resetMax();
    }
    delete this.store[this.length - 1]
    this.setNewMax();
  }
  this.length -= 1
  return popped;
}

Stack.prototype.getMax = function () {
  return this.length === 0 ? undefined : this.max.val;
}

module.exports = Stack;