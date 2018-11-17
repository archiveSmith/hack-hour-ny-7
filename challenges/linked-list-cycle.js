/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}


//only challenge 3
function hasCycleOld(head) {
  if(!head || !head.value) {
    return undefined;
  }

  let nodeArr = [];
  let isCyclical = false;
  cycleInner(head);
  return isCyclical;

  function cycleInner(node) {
    let repeat = nodeArr.find(copiedNode => node == copiedNode);
    if (repeat) {
      isCyclical = true;
      return;
    } 

    nodeArr.push(node);
    if (node.next) {
      return cycleInner (node.next);
    }
  }
}

//challenge 1 and 2
function hasCycle(head) {
  if(!head || !head.value) {
    return null;
  }

  let isCyclical = false;
  cycleInner(head);
  return isCyclical;

  function cycleInner (node) {
    if (node._touched) {
      isCyclical = true;
      return;
    }

    node._touched = true;
    if (node.next) {
      return cycleInner (node.next);
    }
  }
}

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
node5.next = node2;

console.log(hasCycle(node1));

module.exports = {Node: Node, hasCycle: hasCycle}
