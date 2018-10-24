/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    const newNode = {
      value
    }; // 1
    newNode.next = this.head; // 2
    this.head = newNode; // 3
    this.length++;
    return this;
  }
}
const l1 = new LinkedList('first')
  .addToHead('second')
  .addToHead('third');

const l2 = new LinkedList('first')
  .addToHead('second')
  .addToHead('third');

function zip(l1, l2) {

};

/////////////////////////
function Node(val) {
  this.value = val;
  this.next = null;
}
function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr = new Node(l1.value);
  curr.next = zip(l2, l1.next);
  return curr;
}

module.exports = {
  Node: Node,
  zip: zip
};