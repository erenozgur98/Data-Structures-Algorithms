// Write a BST class for a Binary Search Tree. The class should support:
// • Inserting Values with the insert method
// • Removing values with the remove method; this method should only remove the first instance of a given value.
// • Searching for values with the contains method

// Note that you can't remove values from a single-node tree. In other words, calling the remove method on a single-node tree should simply not do anything.

// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the vbalues of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / Null.

// Sample Usage \\

// Assume the following BST has already been created:

//             10
//        /         \
//       5           15
//     /   \        /  \
//    2     5      13   22
//  /                \
// 1                  14

// All operations below are performed sequentially.

// insert(12):

//             10
//        /         \
//       5           15
//     /   \        /  \
//    2     5      13   22
//  /             /  \
// 1             12   14

// remove(10):

//             12
//        /         \
//       5           15
//     /   \        /  \
//    2     5      13   22
//  /                \
// 1                  14

// contains(15): true


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    insert(value) {
        // Write your code here
        // Do not edit the return statement of this method

        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value)
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }

        return this;
    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    contains(value) {
        // Write your code here

        if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value)
            }
        } else if (value > this.value) {
            if (this.right === null) {
                return false;
            } else {
                this.right.contains(value);
            }
        } else {
            return true;
        }

    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    remove(value, parent = null) {
        // Write your code here
        // Do not edit the return statement of this method

        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this);
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue()
                this.right.remove(this.value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.right;
                    this.right = this.right.left;

                } else {
                    // this is a single-node tree; do nothing
                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else {
                parent.right = this.left !== null ? this.left : this.right;
            }
        }

        return this;
    }

    getMinValue() {
        if (this.left === null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }

}