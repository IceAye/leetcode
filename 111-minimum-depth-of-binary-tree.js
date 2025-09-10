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
const minDepth = function (root) {
    if (!root) return 0;
    let depth = 1;

    const queue = [root];

    while (queue.length) {

        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (!node.left && !node.right) return depth;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth++;
    }
};

console.log(minDepth([]));
console.log(
    minDepth(
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        ),
    ),
);
console.log(
    minDepth(
        new TreeNode(
            2,
            null,
            new TreeNode(
                3,
                null,
                new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))),
            ),
        ),
    ),
);
