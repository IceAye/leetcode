// ❓ DESCRIPTION:
// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].
// Return the maximum difference. If no such i and j exists, return -1.
// 📅 (daily question 2025, June 16th)
//
// ✅ SOLUTION 1:
const maximumDifference = function (nums) {
    let min = nums[0];
    let diff = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        } else {
            let temp = nums[i] - min;
            diff = Math.max(diff, temp);
        }
    }
    return diff || -1;
};

// ✅ SOLUTION 2:
const maximumDifference = function(nums) {
    let max = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) max = Math.max(max, nums[j] - nums[i]);
        }
    }
    return max;
};

// 📌 TESTCASE:
console.log(maximumDifference( [7,1,5,4])) // 4
console.log(maximumDifference([9,4,3,2])) // -1
console.log(maximumDifference([1,5,2,10])) // 9