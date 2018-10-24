/**
 * Write a function for reversing a linked list.
<<<<<<< HEAD
 * Your function will have one input: the currNode of the list
=======
 * Your function will have one input: the head of the list
>>>>>>> 232cbb6c6efe5ff4aa05170c96cb44e67451909a
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
    let newList = [];
    if (head.value === null) return null;
    let currNode = head;
    while (currNode.next !== null) {
        newList.push(currNode.value);
        currNode = currNode.next;
    }
    newList.push(currNode.value);


    let reversedList = newList.reverse();
    let newLL = new Node(reversedList[0]);
    let newHead = newLL;
    for (let i = 1; i < reversedList.length; i++) {
        newLL.next = new Node(reversedList[i]);
        newLL = newLL.next;
    }
    return newHead;
}

module.exports = {
    Node: Node,
    reverseLinkedList: reverseLinkedList
};