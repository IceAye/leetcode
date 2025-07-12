function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

let rangeSumBST = function (root, low, high) {
    let result = 0;

    function checkAndAddValue(node) {
        if (!node) return;

        if (node.val >= low && node.val <= high) {
            result += node.val;
        }
        if (node.val > low) {
            checkAndAddValue(node.left);
        }

        if (node.val < high) {
            checkAndAddValue(node.right);
        }
    }

    checkAndAddValue(root);
    return result;
};

console.log(
    rangeSumBST(
        new TreeNode(
            10,
            new TreeNode(5, new TreeNode(3), new TreeNode(7)),
            new TreeNode(15, new TreeNode(null), new TreeNode(18)),
        ),
        7,
        15,
    ),
); // 32
