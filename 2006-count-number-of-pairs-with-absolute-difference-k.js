// ❓ DESCRIPTION:
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
//
// The value of |x| is defined as:
//
// x if x >= 0.
// -x if x < 0.
//
// ✅ SOLUTION:
const countKDifference = function(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) count++;
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(countKDifference([1,2,2,1], 1)) // 4
console.log(countKDifference([1,3], 3)) // 0
console.log(countKDifference([3,2,1,5,4], 2)) // 3