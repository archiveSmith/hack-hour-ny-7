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

    let copyNode = JSON.parse(JSON.stringify(l1Current));

    //if l1 is longer than l2, then copyNode still keeps the remaining from l1
    if(l2HasNext){
      copyNode.next = l2Current.next;
    }

    l2Current.next = copyNode;

    l2Current = l2HasNext ? copyNode : null;
    l1Current = l1Current.next;
  }

  return l2;
  //if l2 is longer than l2, nothing needs to be done since the loop will end itself
};

module.exports = {Node: Node, zip: zip};
