// ❓ DESCRIPTION:
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// ❗ CONSTRAINTS:
// 1 <= target <= 10^9
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^4

// ✅ SOLUTION:
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target , nums) {
    let min = Infinity;

    let left = 0;
    let right = 0;

    let sum = 0;

    while (right < nums.length) {
        sum += nums[right];
        right++;

        while (sum >= target) {
            min = Math.min(min , right - left);
            sum -= nums[left];
            left++;
        }
    }

    return min | 0;
};

// 📌 TESTCASE:
console.log(minSubArrayLen(7 , [2 , 3 , 1 , 2 , 4 , 3])); // 2
console.log(minSubArrayLen(4 , [1 , 4 , 4])); // 1
console.log(minSubArrayLen(11 , [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1])); // 0