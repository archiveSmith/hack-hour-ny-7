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
  let result = null;
  let stack = [];

  let current = head;

  while (current) {
    stack.push(current);
    current = current.next;
  }

  result = stack.pop() || [];
  current = result;

  while (current) {
    current.next = stack.pop();
    current = current.next;
  }
  return result;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
