// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.
// Return a list of all k-distant indices sorted in increasing order.
// (daily question 2025, June 24th)
//
// ✅ SOLUTION:
const findKDistantIndices = function(nums, key, k) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if ((Math.abs(i - j) <= k) && (nums[j] === key)) set.add(i);
        }
    }
    return [...set.values()];
};

// 📌 TESTCASE:
console.log(findKDistantIndices([3,4,9,1,3,9,5],  9, 1)) // [1,2,3,4,5,6]
console.log(findKDistantIndices([2,2,2,2,2],  2, 2)) // [0,1,2,3,4]