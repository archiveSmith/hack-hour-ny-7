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

function validBST(tree, test = true) {
  if(!test || (tree.left ? tree.left.value > tree.value : false) || (tree.right ? tree.right.value < tree.value : false)) return false;
  let left = tree.left ? validBST(tree.left, test) : true;
  let right = tree.right ? validBST(tree.right, test) : true;
  return left && right;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
