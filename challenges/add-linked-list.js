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
  if (!l1) return l2;
  if (!l2) return l1;

  let newLink;
  let carriedNum = null;

  while (l1 || l2) {
    // console.log(l1, l2);
    if (!l1 || !l2) {
      if (!l1) {
        newLink.next = new Node(l2);
        l2 = l2.next;
      } else {
        newLink.next = new Node(l1);
        l1 = l2.next;
      }
    } else {
      if (!carriedNum) {
        if (l1.value + l2.value > 9) {
          let value = l1.value + l2.value;
          carriedNum = Number(value.toString()[0]);
          if (!newLink) {
            newLink = new Node(Number(value.toString()[1]));
          } else {
            newLink.next = new Node(Number(value.toString()[1]));
          }

          l1 = l1.next;
          l2 = l2.next;
        }
      } else {
        if (l1.value + l2.value + carriedNum > 9) {
          let value = Number(value.toString()[0]);
          carriedNum = Number(value.toString()[0]);

          newLink.next = new Node(Number(value.toString()[1]));

          l1 = l1.next;
          l2 = l2.next;
        }
      }
    }
  }

  return newLink;
}

// const link1 = new Node(2);
// link1.next = new Node(1);
// link1.next.next = new Node(5);

// const link2 = new Node(5);
// link1.next = new Node(9);
// link1.next.next = new Node(2);

// console.log(addLinkedList(link1, link2));
module.exports = { Node: Node, addLinkedList: addLinkedList };
