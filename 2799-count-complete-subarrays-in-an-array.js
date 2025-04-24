// ❓ DESCRIPTION:
// You are given an array nums consisting of positive integers.
//
// We call a subarray of an array complete if the following condition is satisfied:
//
// The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
// Return the number of complete subarrays.
//
// A subarray is a contiguous non-empty part of an array.
//
// ✅ SOLUTION:
const countCompleteSubarrays = function(nums) {
    const target = new Set(nums).size;
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            seen.add(nums[j]);
            if (seen.size === target) {
                count += n - j;
                break;
            }
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(countCompleteSubarrays([1,3,1,2,2])) // 4
console.log(countCompleteSubarrays([5,5,5,5])) // 10