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
    let inOrderTraversal = [];
    
    validBSTRec(tree);
    console.log(inOrderTraversal);

    for (let i = 1; i < inOrderTraversal.length - 1; i++){
        if(inOrderTraversal[i] <= inOrderTraversal[i-1]){
            return false;
        }
    }
    return true;

    function validBSTRec(tree) {
        if(tree.left){
            validBSTRec(tree.left)
        }
        inOrderTraversal.push(tree.value);
        if(tree.right){
            validBSTRec(tree.right)
        }
    }

}

function validBSTIterative(tree) {
    //error checking
    if (!tree) {
        return true;
    }

    let queue = [tree];
    while (queue.length > 0){
        let currentNode = queue.shift();
        
        //cut off immediately if left is larger than val or same on right
        if(currentNode.left) {
            if(currentNode.left.value > currentNode.value) {
                return false;
            }
        }
        if(currentNode.right) {
            if(currentNode.right.value < currentNode.value) {
                return false;
            }
        }

        //if current node passes, add both children node if they exist to queue
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return true;
}


let bst = new BinaryTree(20);
bst.right = new BinaryTree(30);
bst.right.right = new BinaryTree(35);
bst.right.left = new BinaryTree(19);
bst.left = new BinaryTree(10);

console.log(bst);
console.log(validBST(bst));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
