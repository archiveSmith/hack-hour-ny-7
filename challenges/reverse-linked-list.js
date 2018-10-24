/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
console.log("Hello from reverse-linked-list.js")

function Node(value) {
    this.value = value;
    this.next = null;
}
/*TASK LIST:
-create a function named reverseLinkedList with parameter: head
    -declare a varieble named prev and assing it to null
    -declare a varieble named curr and assing it the head param
    -declare a varieble named next and leave it undeffined
    -while curr has a value
        -reassing next to be the value of the next prop in the curr variable
        -reassing the vlaue of the next prop in the curr variable to be the value of prev
        -reassing  the prev variable to be the value of curr
    -end of while iteration
    -reassign the head param to be the value of prev
    -return the vlaue of head
-end of reverseLinkedList
*/
function reverseLinkedList(head) {

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
