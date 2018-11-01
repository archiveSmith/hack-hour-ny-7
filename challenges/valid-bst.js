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
    if (!tree) { return false; }
    const current = tree;
    let valid = true;
    console.log("----THIS IS THE TREE----", current.value);

    if (valid !== false && current.left) {
        if (valid !== false && current.value > current.left.value) {
            valid = validBST(current.left);
        } else {
            valid = false;
        }
    }

    if (valid !== false && current.right) {
        if (valid !== false && current.value < current.right.value) {
            valid = validBST(current.right);
        } else {
            valid = false;
        }
    }

    return valid;
}

// const tree = new BinaryTree(25);
// tree.left = new BinaryTree(13);
// tree.right = new BinaryTree(28);
// tree.left.left = new BinaryTree(11);
// tree.left.right = new BinaryTree(15);
// tree.right.left = new BinaryTree(27);
// tree.right.right = new BinaryTree(29);


// console.log(validBST(tree));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
