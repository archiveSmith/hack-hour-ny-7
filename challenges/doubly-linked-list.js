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
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};






//*********************************fellow solution *********************************
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
  const node = new Node(val);
  if (!this.tail) {
    this.tail = node;
    this.head = node
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;
  while (currNode) {
    if (currNode.val === val){
      if (!currNode.prev) this.head = currNode.next;
      else {
        currNode.prev.next = currNode.next;
      }
      if (!currNode.next) this.tail = currNode.prev;
      else {
        currNode.next.prev = currNode.prev;
      }
      break;
    } else {
      currNode = currNode.next;
    }
  }
};

const list = new LinkedList();

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
console.log({list});
list.remove(3)
list.remove(5)
console.log({list});
list.remove(4);
console.log({list});
list.remove(1);
console.log({list});



module.exports = LinkedList;
