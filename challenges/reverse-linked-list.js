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
}

function reverseLinkedList(node) {
    if (!node) { return null; } 

    let result = reverseLinkedListRec(node, node.next);
    node.next = null;
    return result;

    function reverseLinkedListRec(thisNode, nextNode) {
        //if no next node, so we are at the tail...
        if (!nextNode) {
            return thisNode;
        } 
        let newHead = reverseLinkedListRec(nextNode, nextNode.next);
        nextNode.next = thisNode;
        return newHead;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

console.log(a);

console.log(reverseLinkedList(a));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
