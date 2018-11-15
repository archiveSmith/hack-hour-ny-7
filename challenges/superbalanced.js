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

  if(!tree) {
    return undefined;
  }

  let balanced = true;
  superbalancedRec(tree);
  return balanced;

  function superbalancedRec(tree) {

    if(!tree.left && !tree.right) {
      return 0;
    }

    let rightHeight = tree.right ? superbalancedRec(tree.right) + 1 : 0;
    let leftHeight = tree.left ? superbalancedRec(tree.left) + 1 : 0;

    let difference = Math.abs(rightHeight - leftHeight);
    if (difference > 1) {
      balanced = false;
    }

    return Math.max(rightHeight, leftHeight);
  }
}

let bst = new BinaryTree(10);
bst.left = new BinaryTree(5);
bst.right = new BinaryTree(15);
bst.left.left = new BinaryTree(3);


console.log(superbalanced(bst));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
