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
<<<<<<< HEAD
    if (!tree) {
        return true;
    } 
    if (tree.left !== null) {
        if (tree.left.value > tree.value) {
            return false;
        }
    } 
    if (tree.right !== null) {
        if (tree.right.value < tree.value) {
            return false;
        }
    } 
    const leftSide = validBST(tree.left);
    const rightSide = validBST(tree.left);
    return leftSide && rightSide;
}

// module.exports = {BinaryTree: BinaryTree, validBST: validBST};

let tree = new BinaryTree(10);
tree.left = new BinaryTree(8);
tree.left.right = new BinaryTree(9);
tree.left.right.right = new BinaryTree(14);
tree.left.left = new BinaryTree(6);
tree.right = new BinaryTree(15);
tree.right.right = new BinaryTree(18);
tree.right.left = new BinaryTree(16);
tree.right.left.right = new BinaryTree(17);

console.log(tree);

console.log(validBST(tree));
=======

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
>>>>>>> c066f90a398f780630359ee123eb1656e0654a4a
