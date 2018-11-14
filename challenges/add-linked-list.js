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
  let a = l1;
  let b = l2;
  let carryover = 0;
  let x, y;
  let curr = new Node();
  let head = curr;

  while(a || b) {

    a ? x = a.value : x = 0;
    b ? y = b.value : y = 0;

    const sum = x + y + carryover;
    carryover = (sum > 9) ? 1 : 0;
    // if (sum > 9) { carryover = 1 };
    // carryover = Math.floor(sum / 10);

    const newNode = new Node(sum % 10);
    curr.next = newNode;
    curr = curr.next;

    if (a) { a = a.next };
    if (b) { b = b.next };
  }
  
  if (carryover === 1) {
    curr.next = new Node(1);
  }
  return head.next;
}

// const l1 = new Node(2);
// l1.next = new Node(4);
// // l1.next.next = new Node(3);

// // const l2 = new Node(5);
// // l2.next = new Node(6);
// // l2.next.next = new Node(4);

// // const l1 = new Node(5);
// const l2 = new Node(5);

// console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
