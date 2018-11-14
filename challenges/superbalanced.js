/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  if (typeof(tree) === 'undefined') { return undefined }
  return (maxDepth(tree) - minDepth(tree) <= 1)
}

function minDepth(node) {
  if (typeof(node) === 'undefined') { return 0 }
  return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
}

function maxDepth(node) {
  if (typeof(node) === 'undefined') { return 0 }
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
