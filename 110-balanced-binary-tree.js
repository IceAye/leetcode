// ❓ DESCRIPTION:
// Given a binary tree, determine if it is height-balanced.

// ✅ SOLUTION (89.34% runtime,  99.25% memory):
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
    const dfsPost = (node) => {
        if (!node) return 0;

        const left = dfsPost(node.left);
        const right = dfsPost(node.right);

        if (left === false || right === false) return false;

        if (Math.abs(left - right) > 1) return false;

        return Math.max(left, right) + 1;
    };

    return dfsPost(root) !== false;
};

// 📌 TESTCASE:
console.log(
    isBalanced(
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        ),
    ),
);
console.log(
    isBalanced(
        new TreeNode(
            1,
            new TreeNode(
                2,
                new TreeNode(3, new TreeNode(4), new TreeNode(4)),
                new TreeNode(3),
            ),
            new TreeNode(2),
        ),
    ),
);
