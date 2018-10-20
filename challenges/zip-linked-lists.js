/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  /* Step 1. Create a head and a new list  */
  const l3 = new Node(val);
  let prev = l3;
  let count = 0;

  /* Step 2. Get the first node of the first list append it to the list and move onto the first node of the second list */
  /* Step 2a. Check the first value  */
  /* Step 2b. traverse the list as long as the current node does not equal null */
  while (l1 !== null && l2 !== null) {
    /* Step 2c. set counter to know when to swap which list is referenced */
    count += 1;
    /* Step 2d. if number is even push list 1 */
    if (count % 2 === 0) {
      prev.next = l1;
      l1 = l1.next;
      /* Step 2e. else push list one */
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    /* Step 2f. continue */
    prev = prev.next;
  }

  /* once we reach end of a linked list, append the other  */
  /* list because we know it is already sorted */
  if (l1 === null) {
    prev.next = l2;
  }
  if (l2 === null) {
    prev.next = l1;
  }

  /* Step 4. Continue this process until the end */ 
  /* return the sorted linked list */
  return l3.next;
}

module.exports = {
  Node: Node,
  zip: zip
};