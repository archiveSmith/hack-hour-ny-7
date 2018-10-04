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

// Short solution 
//function kthToLastNode(k, head) {
//   let currentNode = head;
//   let target = `currentNode${'.next'.repeat(k)}`
//   console.log(target)
//   while (eval(target) !== null) {
//     console.log(currentNode.next.next)
//     currentNode = currentNode.next;
//   }
//   return currentNode.value;
// }

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head) {
  // Step 1. Reset head value to index 
  let searchIdx = head;

  // Step 2. Create empty array 
  let nodeArr = [];


  // Step 3. If no head exists return a response
  if (searchIdx === null) {
    return undefined;
  }

  // Step 4. While index does not equal null traverse the linked list and increment the counter
  while (searchIdx !== null) {
    nodeArr.push(searchIdx)
    searchIdx = searchIdx.next;
  }

  // Step 5. Loop again while idxPos < idxPos - k
  if (nodeArr[nodeArr.length - k].value === undefined) {
    return undefined;
  } else {
    // Step 6. Stop when the idxPos does equal idxPos - k and return value
    return nodeArr[nodeArr.length - k].value;
  }
}

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};
