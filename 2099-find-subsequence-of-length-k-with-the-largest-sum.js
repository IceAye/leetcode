// ❓ DESCRIPTION:
// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
// Return any such subsequence as an integer array of length k.
// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
// (daily question 2025, June 28th)
//
// ✅ SOLUTION 1 (86.79% runtime):
const maxSubsequence = function (nums, k) {
    const maxSumProviders = nums.toSorted((a, b) => b - a).slice(0, k);
    const map = new Map();

    const result = [];

    for (const num of maxSumProviders) {
        map.set(num, map.get(num) + 1 || 1);
    }

    let i = 0;
    while (result.length < maxSumProviders.length) {
        if (map.get(nums[i]) > 0) {
            result.push(nums[i]);
            map.set(nums[i], map.get(nums[i]) - 1);
        }
        i++;
    }

    return result;
};

// ✅ SOLUTION 2:
const maxSubsequence = function (nums, k) {
    const indexedNums = nums.map((num, ind) => [num, ind]);
    const sortedNums = indexedNums.sort((a, b) => b[0] - a[0]);
    return sortedNums.slice(0, k).sort((a, b) => a[1] - b[1]).map(num => num[0]);
};

// 📌 TESTCASE:
console.log(maxSubsequence([2, 1, 3, 3], 2)); // [3,3]
console.log(maxSubsequence([-1, -2, 3, 4], 3)); // [-1,3,4]
console.log(maxSubsequence([3, 4, 3, 3], 2)); // [3,4]