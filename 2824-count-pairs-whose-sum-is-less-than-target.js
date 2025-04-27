// ❓ DESCRIPTION:
// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
//
// ✅ SOLUTION:

const countPairs = function(nums, target) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) count++;
        }
    }

    return count;
};

// 📌 TESTCASE:
console.log(countPairs([-1,1,2,3,1], 2)) // 3
console.log(countPairs([-6,2,5,-2,-7,-1,3], -2)) // 10