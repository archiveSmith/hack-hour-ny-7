/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;  //added in
}


function reverseLinkedList(head) {
  let currNode = new Node(head);
  while (currNode) { //while newNode is not null and true
    currNode = currNode.next;
    if(currNode.next === null) {
      currNode = currNode.previous
    }
    return currNode.previous;
  }
}

//Jonathans solution
function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;  //added in
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let next;

  while(curr) {
    next = curr.next;
    curr.next = prev;
    curr = next;
  }
  head = prev;
  return head;
}

// [prev]=null
//[current]=head
//[next]=undefined



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList}










;
