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
  let current = this.head; 
  while (current.next !== null) {
    current = current.next;
  }
  let newLast = new Node(val);
  current.next = newLast;
  newLast.prev = current;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current.next.val !== val) {
    current = current.next;
  }
  if (current.next.next !== null) {
    let newNext = current.next.next;
    current.next = newNext;
    newNext.prev = current;
  } else {
    current.next = null;
  }
};


let dll = new LinkedList();
// console.log(dll);
dll.head = new Node(4);
// console.log(dll);
dll.add(6);
dll.add(9);
dll.add(12);
console.log(dll.head.next.next.val);
dll.remove(9);
console.log(dll.head.next.next.val);

// console.log(dll);
module.exports = LinkedList;
