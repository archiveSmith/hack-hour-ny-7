/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function len (node){
  let counter = 0;
  let currentNode = node;
  while(currentNode){
    counter++;
    currentNode = currentNode.next;
  }
  return counter;
}



function kthToLastNode(k, head) {
  let counter = len(head) - k;
  let currentNode = head;
  for (let i = 0; i < counter; i++){
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
