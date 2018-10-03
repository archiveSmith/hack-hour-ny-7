/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 */
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

 

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let current = head;
  let counter = 1;
  
  while(current.next !== null){
    counter++
    current = current.next;
  }

  current = head;

  for(let i = counter; i > 0; i--){
    if(i === k){
      return current.value
    }
    current = current.next;
  }

  return undefined;
}

console.log(kthToLastNode(0, a));
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
