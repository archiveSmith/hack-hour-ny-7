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

function reverseLinkedList(head, newHead = null) {
  if(!head.next) return newHead;
  let nextNode = head.next;
  let node = head;
  while(nextNode.next) {
      node.next = nextNode;
      nextNode.next = node.next;
  }
  nextNode.next = node;
  node.next = null;
  reverseLinkedList(head, nextNode);
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
