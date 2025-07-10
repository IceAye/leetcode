// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums.
//
// The distinct count of a subarray of nums is defined as:
//
// Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].
// Return the sum of the squares of distinct counts of all subarrays of nums.
//
// A subarray is a contiguous non-empty sequence of elements within an array.

// ✅ SOLUTION 1:
const sumCounts = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            const setSize = new Set(nums.slice(i, nums.length - j)).size;
            sum += setSize**2;
        }
    }
    return sum;
};

// ✅ SOLUTION 2:
const sumCounts = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let set = new Set();
        for (let j = i; j < nums.length; j++) {
           set.add(nums[j]);
           sum += set.size**2;
        }
    }
    return sum;
};

// 📌 TESTCASE:
console.log(sumCounts([1,2,1])) // 15
console.log(sumCounts([1,1])) // 3