/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (4 -> 9 -> 2)
 * Output: 6 -> 0 -> 8
 *
 * The 6 is the ones digit (2 + 5).
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




//*********************************fellow solution *********************************
function Node(val) {
  this.value = val;
  this.next = null;
}

// iterative
function addLinkedList(l1, l2) {
  let cur = new Node(null); // will be the returned list, val doesn't matter
  const head = cur; // keep track of the head to ultimately return its .next
  let sum = 0;
  while (l1 || l2 || sum) { // we check sum in case of carryovers from end of lists
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }
    // add the new Node to the returned list, modulo 10 will give us
    // either the number itself or the number minus 10 if > 9
    cur.next = new Node(sum % 10);
    cur = cur.next; // move to next digit in the list we're making
    sum = sum > 9 ? 1 : 0; // start the next iteration with a sum of 1 if we need to carry a 1
  }
  return head.next;
}

// recursive
function addLinkedList(l1, l2, carryover) {
  if (!l1 && !l2 && !carryover) {
    return null;
  }

  var sum = carryover || 0;
  if (l1) {
    sum += l1.value;
  }
  if (l2) {
    sum += l2.value;
  }
  var result = new Node(sum % 10);
  if (l1 || l2) {
    var rest = addLinkedList(
      l1 ? l1.next : null,
      l2 ? l2.next : null,
      sum >= 10 ? 1 : 0
    );
    result.next = rest;
  }
  return result;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
