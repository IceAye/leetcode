// ❓ DESCRIPTION:
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// ✅ SOLUTION (100% runtime):
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length && queue2.length) {

        const node1 = queue1.shift();
        const node2 = queue2.shift();

        if (node1 === null && node2 === null) continue;

        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        queue1.push(node1.left, node1.right);
        queue2.push(node2.left, node2.right)
    }

    return true;
};

// 📌 TESTCASE:
console.log(isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)), new TreeNode(1, new TreeNode(2), new TreeNode(3))))