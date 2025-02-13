// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.
// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
// Return the minimum possible difference.
//
// ✅ SOLUTION:
const minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        let diff = nums[i + k - 1] - nums[i];
        result.push(diff);
    }
    return Math.min(...result);
};

// 📌 TESTCASE:
console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9, 4, 1, 7], 2)); // 2
