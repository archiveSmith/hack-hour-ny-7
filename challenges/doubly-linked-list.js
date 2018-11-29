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
  if (this.head === null) {
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
  } else if ((this.head != null) & (this.tail != null)) {
    let newNode = new Node(val);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val && this.tail.val === val) {
    this.head.val = null;
    this.tail.val = null;
  } else {
    let node = this.head;
    while (node.val != val) {
      node = node.next;
    }
    node = node.next;
    node.prev = node.prev.prev;
    node = null;
  }
};

module.exports = LinkedList;
