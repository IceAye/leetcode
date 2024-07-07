// ❓ DESCRIPTION:
// You are given the root of a binary tree that consists of exactly 3 nodes:
// the root, its left child, and its right child.
// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.
//
// 📌 EXAMPLES:
// Input: root = [10,4,6] --> Output: true
// Input: root = [5,3,1] --> Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// ✅ SOLUTION:
const checkTree = root => root.val === (root.left.val + root.right.val)