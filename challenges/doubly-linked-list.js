/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let output;

  if (this.head.val === val) { 
    output = this.head;
    this.head = this.head.next;
    return output
  }

  let curr = this.head.next;
  let prev = this.head;

  while (curr !==null) {
    if (curr.val === val) {
      output = curr;
      prev.next = curr.next;
      curr.next.prev = prev;
      return output;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return output
  
};

module.exports = LinkedList;
