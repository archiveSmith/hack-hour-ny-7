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
  if(!l1.head || !l2.head) return;

  let l1Current = l1.head;
  let l2Current = l2.head;

  //while both current nodes are not null
  //use l2 as the static list, try to weave in l1;
  while(l1Current !== null && l2Current !== null){
    //save at beginning whether l2current has next
    let l2HasNext = l2Current.next ? true : false;

    //deep copy to take care of pass by reference
    let copyNode = JSON.parse(JSON.stringify(l1Current));

    //if l2 doesn't have a next, should take all of l1current (aka copynode)'s children with it
    if(l2HasNext){
      copyNode.next = l2Current.next;
    }

    //set l2current's next, and depending if it originally had children, move down or set to null
    l2Current.next = copyNode;
    l2Current = l2HasNext ? copyNode : null;

    //move down l1current
    l1Current = l1Current.next;
  }

  return l2;
};

module.exports = {Node: Node, zip: zip};
