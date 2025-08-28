// ❓ DESCRIPTION:
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// ✅ OLUTION:
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
const isSymmetric = function (root) {
    if (!root) return true;
    const check = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        else {
            return left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
        }
    }
    return check(root.left, root.right);
};

// 📌 TESTCASE:
console.log(
    isSymmetric(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(2, new TreeNode(4), new TreeNode(3)),
        ),
    ),
); // true
