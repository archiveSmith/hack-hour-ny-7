/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

//stack parent with their core properties. use this to reference properties.
function Stack() {
  // body...
  this.stack = {};
  this.length = 0;
  //set a new variable max here and used it below.
}

//building a push method, set value to the stack and its index.
//use this to reference to parent Stack properties function
Stack.prototype.push = (value) => {
  this.stack[this.length] = value;
  this.length++;
  return this.length;
  //this.stack[this.length] = value;
  //return ++this.length;
}

//pop removes last in stack.
Stack.prototype.pop = () => {
//reduce length to pop
this.length--;
//store removed element
const result = this.stack[this.length]
delete this.storage[this.length];
return result 
//let result = this.stack[--this.length];
//delete this.stack[this.length]
//return temp
}

//getMax should return the largest value currently in stack.
Stack.prototype.getMax = () => {
  if(this.length === 0) return undefined;
  let max = null;
  this.stack.forEach((stack) => {
    if(max === null || max < stack) max = num;
  });
  return max
}

//to get return max at O(1) time
Stack.prototype.getMaxFast = () => {
  if(this.length === 0) return undefined;
  let max = null;

}


module.exports = Stack;












