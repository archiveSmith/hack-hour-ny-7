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
    //error checking
    if (!tree) {
        return true;
    }

    //check both sides to meet constraint
    let leftMeetConstraint = true;
    if (tree.left) {
        if (tree.left.value > tree.value) {
            leftMeetConstraint = false;
        }
    }
    let rightMeetConstraint = true;
    if (tree.right) {
        if (tree.right.value < tree.value) {

            rightMeetConstraint = false;
        }
    }

    console.log(tree.value, leftMeetConstraint, rightMeetConstraint);
    //if either is false, tree is not valid, no need for recursive call
    if(leftMeetConstraint === false|| rightMeetConstraint === false) {
        return false;
    } 
    //if both are true, need to do recursive call on both sides if they exist
    else {
        //initialize values as true, since its okay to not have children
        let leftChildConstraint = true;
        if(tree.left) {
            leftChildConstraint = validBST(tree.left);
        }
        let rightChildConstraint = true;
        if(tree.right) {
            rightChildConstraint = validBST(tree.right);
        }

        return (leftChildConstraint && rightChildConstraint) ? true : false;
    }
}
let bst = new BinaryTree(20);
bst.right = new BinaryTree(30);
bst.right.right = new BinaryTree(35);
bst.right.left = new BinaryTree(34);
bst.left = new BinaryTree(10);

console.log(bst);
console.log(validBST(bst));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
