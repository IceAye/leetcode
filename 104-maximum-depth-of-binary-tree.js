// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    if (!root) return 0;

    let max = 0;
    const stack = [[root, 1]];

    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        if (node) {
            max = Math.max(max, depth);
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }

    return max;
};

console.log(
    maxDepth(
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        ),
    ),
); // 3
