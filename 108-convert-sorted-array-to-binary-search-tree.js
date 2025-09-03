// ❓ DESCRIPTION:
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// ✅ SOLUTION (42.80% runtime, 84.05% memory):
// Definition for a binary tree node.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    const buildNode = (left, right) => {
        if (left > right) {
            return null;
        }
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = buildNode(left, mid - 1);
        root.right = buildNode(mid + 1, right);

        return root
    }

    return buildNode(0, nums.length - 1);
};

// 📌 TESTCASE:
console.log(sortedArrayToBST([-10,-3,0,5,9])) // [0,-3,9,-10,null,5]