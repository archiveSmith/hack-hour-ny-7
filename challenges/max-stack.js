/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
  this.max = Math.max();
  this.maxIndex = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
  if (value > this.max) {
    this.max = value;
    this.maxIndex = this.index-1;
  }
  return this.index;
};

Stack.prototype.pop = function () {
  this.index--;
  return this.storage[this.index];
};

Stack.prototype.getMax = function () {
  return this.max;
};

// Stack.prototype.getMax = function () {
//   let maxVal = Math.max();
//   for (const key in this.storage) {
//     if (this.storage[key] > maxVal) {
//       maxVal = this.storage[key];
//     }
//   }
//   return maxVal;
// };

module.exports = Stack;
