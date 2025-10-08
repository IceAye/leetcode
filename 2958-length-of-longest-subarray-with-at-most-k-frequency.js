// ❓ DESCRIPTION:
// You are given an integer array nums and an integer k.
// The frequency of an element x is the number of times it occurs in an array.
// An array is called good if the frequency of each element in this array is less than or equal to k.
// Return the length of the longest good subarray of nums.
// A subarray is a contiguous non-empty sequence of elements within an array.

// ❗ CONSTRAINTS:
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^9
// 1 <= k <= nums.length

// ✅ SOLUTION (51.85% runtime, 9.26% memory):
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = function(nums , k) {
    const counter = new Map();

    let max = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        counter.set(nums[right] , (counter.get(nums[right]) || 0) + 1);

        while (counter.get(nums[right]) > k) {
            counter.set(nums[left] , counter.get(nums[left]) - 1);
            if (counter.get(nums[left]) === 0) counter.delete(nums[left]);
            left++;
        }

        max = Math.max(max , right - left + 1);
        right++;
    }

    return max;
};

// 📌 TESTCASE:
console.log(maxSubarrayLength([1 , 2 , 3 , 1 , 2 , 3 , 1 , 2] , k = 2)); // 6
console.log(maxSubarrayLength([1 , 2 , 1 , 2 , 1 , 2 , 1 , 2] , k = 1)); // 2
console.log(maxSubarrayLength([5 , 5 , 5 , 5 , 5 , 5 , 5] , k = 4)); // 4