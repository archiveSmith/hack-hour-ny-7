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
<<<<<<< HEAD
  let counterArr = [];
  let currNode = head;
  while (currNode !== null) {
    counterArr.push(currNode.value);
    currNode = currNode.next;
  }
  return counterArr[counterArr.length-k-1];
}

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
//  const f = new Node('F');
//  const g = new Node('G');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
//  e.next = f;
//  f.next = g;

console.log(kthToLastNode(2, a));
=======

}
>>>>>>> bd20c3745dc75bcc5f040e4f3daaab2988ebeebb

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
