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

function reverseLinkedList(head) {
    if (head === null) {return null;}
    if (head.next === null) { return head;}
    
    const queue = [];
    //push all nodes into queue until we reach the tail
    while (head.next !== null) {
        queue.push(head);
        head = head.next;
    }
    //At the end the head is set to the value of the tail
    head.next = queue[queue.length - 1];

    while (queue.length !== 0) {
        let val = queue.pop();
        if (!queue[queue.length - 1]) {
            val.next = null;
        } else {
            val.next = queue[queue.length - 1];
        }
    }

    return head;
}

// const list = new Node(12);
// const node2 = new Node(14);
// const node3 = new Node(19);
// list.next = node2;
// node2.next = node3;


// console.log(reverseLinkedList(list));
module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
