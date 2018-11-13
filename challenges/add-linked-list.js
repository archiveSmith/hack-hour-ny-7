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
  let l1Arr = [];
  while (l1.next !== null) {
    l1Arr.push(l1.value);
    l1 = l1.next;
  }
  l1Arr.push(l1.value);
  let l2Arr = [];
  while (l2.next !== null) {
    l2Arr.push(l2.value);
    l2 = l2.next;
  }
  l2Arr.push(l2.value);
  
  let sum = Number(l1Arr.reverse().join("")) + Number(l2Arr.reverse().join(""));
  let setupArr = String(sum).split("").reverse();
  let finalNode = new Node(Number(setupArr[0]))
  let tempNode = finalNode;
  for (let i = 1; i < setupArr.length; i++) {
    tempNode.next = new Node(Number(setupArr[i]))
    tempNode = tempNode.next
  }

  return finalNode
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
