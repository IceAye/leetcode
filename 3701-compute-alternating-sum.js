// ❓ DESCRIPTION:
// You are given an integer array nums.
// The alternating sum of nums is the value obtained by adding elements at even indices and subtracting elements at odd indices. That is, nums[0] - nums[1] + nums[2] - nums[3]...
// Return an integer denoting the alternating sum of nums.

// ❗ CONSTRAINTS:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// ✅ SOLUTION:
const alternatingSum = function(nums) {
    return nums.reduce((acc, curr, index) => {
        index % 2 === 0 ? acc += curr : acc -= curr;
        return acc;
    }, 0);
};

// 📌 TESTCASE:
console.log(alternatingSum([1,3,5,7])) // -4
console.log(alternatingSum([100])) // 100