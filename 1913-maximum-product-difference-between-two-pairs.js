// ❓ DESCRIPTION:
// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
//
// Return the maximum such product difference.
//
// ✅ SOLUTION:
const maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

// 📌 TESTCASE:
console.log(maxProductDifference([5,6,2,7,4])) // 34
console.log(maxProductDifference([4,2,5,9,7,4,8])) // 64