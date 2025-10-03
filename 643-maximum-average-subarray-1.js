// ❓ DESCRIPTION:
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// ❗ CONSTRAINTS:
// n == nums.length
// 1 <= k <= n <= 10^5
// -10^4 <= nums[i] <= 10^4

// ✅ SOLUTION (31.55% runtime, 64,42% memory):
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums , k) {
    let windowSum = nums.slice(0 , k).reduce((acc , curr) => acc + curr , 0);
    let max = windowSum / k;

    let left = 0;
    let right = k;
    while (right < nums.length) {
        windowSum = windowSum - nums[left] + nums[right];
        max = Math.max(windowSum / k , max);
        left++;
        right++;
    }
    return max;
};

// 📌 TESTCASE:
console.log(findMaxAverage([1 , 12 , -5 , -6 , 50 , 3] , 4)); // 12.75000
console.log(findMaxAverage([5] , 1)); // 5.00000