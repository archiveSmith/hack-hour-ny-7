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
  if (!l1) return l2;
  if (!l2) return l1;
  let nodeCounter = 0;
  let headNode = new Node(l1[0]);
  let nodeZipped = headNode;
  let currentNode = nodeZipped;

  for (let i = 0; i < l1.length; i++) {
    if (i > 0) {
      nodeZipped.next = new Node(l1[i]);
      nodeZipped = nodeZipped.next;
    }
    nodeZipped.next = new Node(l2[i]);
    nodeZipped = nodeZipped.next;
  }
  return headNode;
}

module.exports = {Node: Node, zip: zip};
