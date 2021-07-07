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
  if (!l1 || !l2) {
    return undefined;
  }

  let carry = false;

  //initiate with one's digit
  let initialVal;
  if(l1.value + l2.value >= 10){
    initialVal = l1.value + l2.value - 10;
    carry = true;
  } else {
    initialVal = l1.value + l2.value;
  }
  let resultList = new Node(initialVal);
  let resultListCurrent = resultList;

  //increment both by one;
  l1 = l1.next;
  l2 = l2.next;

  

  while (l1 && l2) {
    //base addition
    let added = l1.value + l2.value;

    //if carry, add one
    added += carry ? 1 : 0;

    //reset carry
    if (added >= 10) {
      added -= 10;
      carry = true;
    } else {
      carry = false;
    }

    //list operations
    resultListCurrent.next = new Node(added);
    resultListCurrent = resultListCurrent.next;

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    let added = carry ? l1.value + 1 : l1.value;

    //reset carry
    if (added >= 10) {
      added -= 10;
      carry = true;
    } else {
      carry = false;
    }

    //list operations
    resultListCurrent.next = new Node(added);
    resultListCurrent = resultListCurrent.next;

    l1 = l1.next;
  }

  while (l2) {
    let added = carry ? l2.value + 1 : l2.value;

    //reset carry
    if (added >= 10) {
      added -= 10;
      carry = true;
    } else {
      carry = false;
    }

    //list operations
    resultListCurrent.next = new Node(added);
    resultListCurrent = resultListCurrent.next;

    l2 = l2.next;
  }

  if (carry) {
    resultListCurrent.next = new Node(1);
  }

  return resultList;
}

let l1 = new Node(5);
// l1.next = new Node(1);
// l1.next.next = new Node(5);

let l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(4);

console.log(addLinkedList(l1, l2));

// * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
// * Output: 7 -> 0 -> 8

module.exports = {Node: Node, addLinkedList: addLinkedList};
