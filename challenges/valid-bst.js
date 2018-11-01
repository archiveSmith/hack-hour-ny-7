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
  if((tree.left ? tree.left.value > tree.value : false) || (tree.right ? tree.right.value < tree.value : false)) return test = false;
  if(tree.left && test) validBST(tree.left, test);
  if(tree.right && test) validBST(tree.right, test);
  return test;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
