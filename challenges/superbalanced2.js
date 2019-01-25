/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function binaryTree(val) {
  this.val = val;
  this.left = this.right = null;
}

function superbalanced(root) {
  if (root === null) return false;

  function calc(node) {
    if (node === null) return 0;
    return 1 + Math.max(calc(node.left), calc(node.right));
  }

  return (Math.abs(calc(node.left) - calc(node.right)) <= 1
    && superbalanced(root.left)
    && superbalanced(root.right)
  ) ? true : false;
}