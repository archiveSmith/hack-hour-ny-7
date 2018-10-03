
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
  if (!k || !head) return undefined;
  let current = head;
  let count = 1;
  while (current.next !== null) {
    count++;
    current = current.next;
  }
  if (count < k) return undefined;
  
  current = head;
  const index = count - k;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.value;
}

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 
 console.log(kthToLastNode(5, a));


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
