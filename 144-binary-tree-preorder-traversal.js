// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    const preordedTree = [];

    if (!root) return [];

    const preorder = (node) => {
        if (!node) return;
        preordedTree.push(node.val);
        preorder(node.left);
        preorder(node.right);
    };

    preorder(root);
    return preordedTree;
};

console.log(
    preorderTraversal(
        new TreeNode(
            1,
            new TreeNode(
                2,
                new TreeNode(4),
                new TreeNode(5, new TreeNode(6), new TreeNode(7)),
            ),
            new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null)),
        ),
    ),
);
