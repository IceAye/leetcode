// ❓ DESCRIPTION:
// Given two binary trees original and cloned and given a reference to a node target in the original tree.
// The cloned tree is a copy of the original tree.
// Return a reference to the same node in the cloned tree.
// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

// ✅ SOLUTION:
// Definition for a binary tree node.
// function TreeNode(val) {
//      this.val = val;
//      this.left = this.right = null;
// }

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

// ✅ TESTCASE:
const getTargetCopy = function(original, cloned, target) {
    if (!original) return null;
    if (original === target) return cloned;
    return getTargetCopy(original.left, cloned.left, target) ||
        getTargetCopy(original.right, cloned.right, target);
};
