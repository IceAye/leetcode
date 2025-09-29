// ❓ DESCRIPTION:
// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// ❗ CONSTRAINTS:
// 3 <= nums.length <= 10^4
// 1 <= nums[i] <= 10^6

// ✅ SOLUTION (30.53% runtime, 64.12% memory):
/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < (nums[i + 1] + nums[i + 2])) return nums[i] + nums[i + 1] + nums[i + 2];
    }
    return 0;
};

// 📌 TESTCASE:
console.log(largestPerimeter([2,1,2])) // 5
console.log(largestPerimeter([1,2,1,10])) // 0