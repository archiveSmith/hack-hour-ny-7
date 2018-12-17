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

//*********************************fellow solution *********************************
// kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)

/* method 1 - O(n) space + O(n) time */ 
function kthToLastNodeOne(k, head) {
  // check to see if k is an integer, k < 1 and the head being turned in is falsy
  if(!Number.isInteger(k) || k < 1 || !head) return;
  // create an array to store node values
  const nodeValues = [];
  // traverse through linked list until we've reached the end
  while(head !== null) {
    // push each value to our nodeValues array
    nodeValues.push(head.value);
    // adjust head pointer to next node in LL
    head = head.next;
  }
  // return the kth node by subtracting k from the length of our array
  return nodeValues[nodeValues.length - k];
}
//console.log(kthToLastNodeOne(2, a));



function kthToLastNodeTwo(k, head) {
  // create variable to store length
  let length = 0;
  // craete length variable set to head
  let findLength = head;
  // create kth variable set to head
  let findKth = head;
  // get length of linked list
  while(findLength) {
    findLength = findLength.next;
    length++;
  }
  // find kth location based on length
  let kth = length - k;
  // traverse through linked list again until we reach kth node
  let i = 0;
  while(i <= k) {
    findKth = findKth.next;
    i++
  }
  // return kth node's value
  return findKth.value;
}

//console.log(kthToLastNodeTwo(2, a));

function kthToLastNodeThree(k, head) {
  // set lead and follow variables to head node
  let lead = head;
  let follow = head;

  // traverse to kth node, setting lead variable to point to kth
  for (let i = 0; i < k && lead; i++) {
    lead = lead.next;
  }
  console.log(lead);
  // Once the lead variable hits null, the follow variable will have hit the the correct Node.
  while(lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }
  // Node. Return the follow Node's value.
  return follow.value;
}


console.log(kthToLastNodeThree(2, a));

function kthToLastNode(k, head) {
  let currentNode = head;
  let target = `currentNode${'.next'.repeat(k)}`
  console.log(target)
  while (eval(target) !== null) {
    console.log(currentNode.next.next)
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

