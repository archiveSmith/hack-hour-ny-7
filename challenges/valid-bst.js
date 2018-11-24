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
  //single node in bi tree is true and valid
  let index = 0;
  const currNode = tree[index].value;
  const currNodeRight = tree[index].right;
  const currNodeLeft = tree[index].left;
  while(currNode !== null)
  if(currNodeRight > currNode) {
    currNode = currNodeLeft;

  }
}


// BinaryTree.prototype.insert = function(val) {
//   insert(val) {
//     if (val < this.val && this.left) this.left.insert(val);
//     else if (val < this.val) this.left = new BinaryTree(val);
//     else if (val > this.val && this.right) this.right.insert(val);
//     else if (val > this.val) this.right = new BinaryTree(val);
//   }
// }

// function validate(node, min = null, max = null) {
//   if (max !== null && node.data > max) return false;
//   if (min !== null && node.data < min) return false;
//   if (node.left && !validate(node.left, min, node.data)) return false;
//   if (node.right && !validate(node.right, node.data, max)) return false;
//   return true;
// }




module.exports = {BinaryTree: BinaryTree, validBST: validBST};
