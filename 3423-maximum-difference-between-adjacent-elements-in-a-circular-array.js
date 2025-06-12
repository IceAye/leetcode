// ❓ DESCRIPTION:
// Given a circular array nums, find the maximum absolute difference between adjacent elements.
// Note: In a circular array, the first and last elements are adjacent.
//
// ✅ SOLUTION 1:
const maxAdjacentDistance = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const diff = i === nums.length - 1 ? Math.abs(nums[i] - nums[0]) : Math.abs(nums[i] - nums[i + 1]);
        max = Math.max(max, diff);
    }
    return max;
};

// ✅ SOLUTION 2 (100% runtime, 91.49% memory):
const maxAdjacentDistance = function(nums) {
    return nums.reduce((max, curr, ind) => Math.max(max, Math.abs(curr - nums.at(ind - 1))), 0);
};

// 📌 TESTCASE:
console.log(maxAdjacentDistance([1,2,4])) // 3
console.log(maxAdjacentDistance([-5,-10,-5])) // 5