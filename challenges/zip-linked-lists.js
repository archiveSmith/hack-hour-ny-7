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
  if (!l1 || !l2){return;}
  let curr1 = l1;
  let curr2 = l2;
  let nextl1 = curr1.next;
  let nextl2 = curr2.next;
  let flag = curr1;

  while(curr1 || curr2){
    if(flag === curr1){
      curr1.next = curr2;
      curr1 = nextl1;
      if(nextl1 !== null){
        nextl1 = nextl1.next;
      }
      flag = curr2;
    }else{
      curr2.next = curr1;
      curr2 = nextl2; 
      if(nextl2 !== null){
        nextl2 = nextl2.next;
      }
      flag = curr1;
    }
  }

  return l1;
};

const l1 = new Node('a');
l1.next = new Node('c');
l1.next.next = new Node('e');
l1.next.next.next = new Node('g');

const l2 = new Node('b');
l2.next = new Node('d');
l2.next.next = new Node('f');
l2.next.next.next = new Node('h');

console.log(zip(l1, l2));
module.exports = {Node: Node, zip: zip};
