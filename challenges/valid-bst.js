/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  let queue = [this];

  while (queue.length) {
    let curNode = queue.shift();

    if (curNode.left) {
      queue.push(curNode.left)
    }

    if (curNode.right) {
      queue.push(curNode.right)
    }
  }

  for (let i = 0; i < queue.length; i++) {
    let cur = queue[i];
    let nex = queue[i + 1]
    if (if cur >= nex) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
