// Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value.

// Each BST node has an integer value, a left child node, and a right child node. Anode is said to be a valid BST jnode if and only if it satisfies the BST property: its value is strictly greater thanthe values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / Null.


// Sample input:
//         10
//       /    \
//      5      15
//     / \     / \
//    2   5   13  22
// Target: 12

// Sample output: 13


const findClosestValueInBst = (tree, target) => {

}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}