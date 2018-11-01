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

function validBST(tree, binaryArr = []) {
    if (!tree) { return false; }
    let valid = true;
    // Checks left branch
    if (tree.left) {
        validBST(tree.left, binaryArr);
    }

    binaryArr.push(tree.value);

    // Checks right branch
    if (tree.right) {
        validBST(tree.right, binaryArr);
    }

    for(let i = 0; i < binaryArr.length; i++){
        if(binaryArr[i] > binaryArr[i + 1]){
            valid = false;
        }
    }

    return valid;
}

// const tree = new BinaryTree(25);
// tree.left = new BinaryTree(13);
// tree.right = new BinaryTree(28);
// tree.left.left = new BinaryTree(11);
// tree.left.right = new BinaryTree(20);
// tree.right.left = new BinaryTree(27);
// tree.right.right = new BinaryTree(29);


// console.log(validBST(tree));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
