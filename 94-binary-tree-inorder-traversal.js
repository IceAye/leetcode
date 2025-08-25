
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    const output = [];

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        output.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    return output;
};

console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))));
console.log(inorderTraversal(new TreeNode(1, new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null)))))