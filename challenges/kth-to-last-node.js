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
  let count = 0;
  while(head !== null) {
    head = head.next;
    count++;
    if(head === null) {
    count = count - k;
    return head[count][value];
    }
  }
}

/*
while (!curr)
curr = curr.next
OR
we can use constant space complexity, and compare "follow" or previous to current.
LEAD AND FOLLOW.
Lead.next = follow, follow.next
use a counter up to K.
*/

module.exports = {Node: Node, kthToLastNode: kthToLastNode};




















