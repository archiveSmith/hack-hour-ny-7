/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let curNode = this.head;
  let lastNode = this.tail;
  let tail = 


  while (curNode) {

    if (lastNode) {
        lastNode.next = newNode;
    }
    else {
        this.head = newNode;
    }
    lastNode = newNode;


    // if (curNode.value === ) {
    //   return curNode;
    // }
  }
}

module.exports = {
  Node: Node,
  reverseLinkedList: reverseLinkedList
};


let newNode1 = new Node(3);
let newNode2 = new Node(6);
let newNode3 = new Node(9);
let newNode4 = new Node(12);


reverseLinkedList(newNode1);