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

function validBST(tree, arr = [], top = 0) {
//   if(!test || (tree.left ? tree.left.value > tree.value : false) || (tree.right ? tree.right.value < tree.value : false)) return false;
//   let left = tree.left ? validBST(tree.left, test) : true;
//   let right = tree.right ? validBST(tree.right, test) : true;
//   return left && right;
  if(this.left) validBST(tree.left, arr, top + 1);
  arr.push(tree.value);
  if(this.right) validBST(tree.right, arr, top + 1);
  if(top === 0) {
      for(let i in arr) {
          if(arr[i] > arr[i + 1]) return false;
      }
      return true;
  };
  return arr;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
