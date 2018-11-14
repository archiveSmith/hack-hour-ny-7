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
  var maxright = 0;
  var maxleft = 0;
  
  function traverseRight(node, right = 0) {
    if (node !== null) {
      right++;
      if (right > maxright) {
        maxright = right;
      }
      traverseRight(node.right, right)
    }
  }

  function traverseLeft(node, left = 0) {
    if (node !== null) {
      left++;
      if (left > maxleft) {
        maxleft = left;
      }
      traverseLeft(node.left, left)
    }  
  }

  if (tree.value !== null) {
    traverseLeft(tree.left);
    traverseRight(tree.right);
    console.log(maxleft, 'left')
    console.log(maxright, 'right')
    return (Math.abs(maxleft - maxright) <= 1 ? true : false) 
  } else {
    return true;
  }
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
