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
  //base case
  if (!head) {
    this.head = new Node(val);
    this.tail = head;
    return;
  }
  
  this.tail.next = new Node(val);
  this.tail.next.prev = this.tail;
  this.tail = this.tail.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!head) {
    return false;
  }

  let returnNode;
  //edge case for when there is only one element;
  if(this.head.next === null) {
    //check if the head is the value
    if(this.head.val === val) {
      returnNode = this.head;
      this.head = null;
      this.tail = null;
      return returnNode.val;
    } 
    else {
      return false;
    }
  }

  //otherwise if 2 or more...
  let current = this.head;
  let currentNext = this.head.next;

  //first check if head is the value;
  if (current.val === val) {
    returnNode = this.head;
    this.head.next.prev = null;
    this.head = this.head.next;
  }
  while (currentNext) {
    
  }
};



module.exports = LinkedList;
