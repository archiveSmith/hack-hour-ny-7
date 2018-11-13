/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  
  if (l1.value + l2.value + carryover >= 10) {
    carryover = 1;
    const val = l1.value + l2.value - 10;

    let curr = new Node(val);
    if (l1.next !== null) {
      curr.next = addLinkedList(l1.next, l2.next, carryover);
     }
    return curr; 
  } else {
    const val = l1.value + l2.value + carryover;
    
    let curr = new Node(val);
    if (l1.next !== null) {
      curr.next = addLinkedList(l1.next, l2.next);
     }
   return curr;
  }

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
