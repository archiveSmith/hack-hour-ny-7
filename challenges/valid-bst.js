/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


// function BinaryTree(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// function validBST(tree) {

// }

//module.exports = { BinaryTree: BinaryTree, validBST: validBST };

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.push = function (val) {
    var root = this.root;

    if (!root) {
        this.root = new Node(val);
        return;
    }

    let currentNode = root;
    let newNode = new Node(val);

    while (currentNode) {
        if (val < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            }
            else {
                currentNode = currentNode.right;
            }
        }
    }
}

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
// bst.push(5);
console.log(bst)

function dfs(currentNode) {
    if (currentNode) {
        console.log(node.value);
        dfs(node.left);
        dfs(node.right);
    }
}

console.log(currentNode)
