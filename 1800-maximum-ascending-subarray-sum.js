// ❓ DESCRIPTION:
// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.
// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note
// that a subarray of size 1 is ascending.
//
// ✅ SOLUTION (runtime 100%):
const maxAscendingSum = function (nums) {
    let max = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            max = Math.max(max , currentSum);
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }
    }

    return Math.max(max , currentSum);
};

// 📌 TESTCASE:
console.log(maxAscendingSum([10 , 20 , 30 , 5 , 10 , 50])); // 65
console.log(maxAscendingSum([10 , 20 , 30 , 40 , 50])); // 150
console.log(maxAscendingSum([12 , 17 , 15 , 13 , 10 , 11 , 12])); // 33