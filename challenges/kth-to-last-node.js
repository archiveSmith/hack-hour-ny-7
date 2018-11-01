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
  //return if head empty
  if(!head || !head.value) {
    return false;
  }

  //set up: attempt to get the kth node, starting from the head
  let currentNode = head;
  for(i = 1; i < k; i++){
    //if anywhere along the way of initial set up, node.next is null, then return error since the linked list is shorter than k
    if(currentNode.next == null){
      return false;
    }
    currentNode = currentNode.next;
  }

  //iterate until endNode is at the end.
  let startNode = head;
  let endNode = currentNode;
  while(endNode.next !== null){
    startNode = startNode.next;
    endNode = endNode.next;
  }

  return startNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
