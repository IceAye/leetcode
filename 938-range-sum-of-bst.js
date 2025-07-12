// ❓ DESCRIPTION:
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// ✅ SOLUTION 1 (91.74% runtime, 85.49% memory):

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

// ✅ SOLUTION 2 (91.74% runtime, 63.84% memory):
let rangeSumBST = function (root, low, high) {

    if (!root) return 0;

    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }

    if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    }
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

// 📌 TESTCASE:
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
