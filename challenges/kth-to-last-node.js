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

function kthToLastNode(k, head) {
  let curr = head;
  let counter = 0;
  while (curr !== null) {
    curr = curr.next;
    counter++;
  }
  let target = counter - k + 1;
  let curr2 = head;
  for (let i=1; i<target; i++) {
    curr2 = curr2.next;
  }
  return curr2;
}

function kthToLastNode(k, head) {
  let curr = head;
  let storage = [];
  let counter = 0;
  while (curr !== null) {
    storage.push(curr.value);
    counter++;
    curr = curr.next;
  }
  return storage[storage.length-k];
}

function kthToLastNode(k, head) {
  let curr = head;
  let counter = 1;
  while (curr.next !== null) {
    counter++;
    curr = curr.next;
  }
  for (let i=1; i<k; i--) {
    curr = curr.prev;
  }
  return curr;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
