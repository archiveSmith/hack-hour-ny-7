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
  //console.log(k, head) 
  // Step 1. Reset head value to index 
  let searchIdx = head;

  // Step 2. Create counter value 
  let idxPos = 0;


  // Step 3. If no head exists return a response
  if (searchIdx === null) {
    return 'No linked list was created';
  }

  // Step 4. While index does not equal null traverse the linked list and increment the counter
  while (searchIdx !== null) {
    console.log(searchIdx, idxPos)
    searchIdx = searchIdx.next;
    idxPos++;
    // Step 5. Loop again while idxPos < idxPos - k
    if (idxPos === (idxPos - k)) {
      console.log('/////sub', idxPos - k)
      searchIdx = searchIdx.next;

      // Step 6. Stop when the idxPos does equal idxPos - k and return value
      return this.value;

    }
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
