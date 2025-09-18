// ❓ DESCRIPTION:
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// ❗ CONSTRAINTS:
// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// ✅ SOLUTION:
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

const hasPathSum = function (root, targetSum) {
    const sumValue = (node, sum) => {
        if (!node) {
            return false;
        }
        let newSum = sum + node.val;

        if (!node.left && !node.right && newSum === targetSum) {
            return true;
        }

        return sumValue(node.left, newSum) || sumValue(node.right, newSum);
    };

    return sumValue(root, 0);
};

// 📌 TESTCASE:
console.log(
    hasPathSum(
        new TreeNode(
            5,
            new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
            new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
        ),
        22,
    ),
);
console.log(hasPathSum([], 0));
console.log(hasPathSum(new TreeNode(1, new TreeNode(2)), 1));
