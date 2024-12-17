// ❓ DESCRIPTION:
// Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.
// Return true if these subarrays exist, and false otherwise.
// A subarray is a contiguous non-empty sequence of elements within an array.
//
// ✅ SOLUTION (runtime 100%):
const findSubarrays = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i] + nums[i + 1];
        if (map.has(sum)) {
            return true;
        }
        map.set(sum, 1);
    }
    return false;
};

// 📌 TESTCASE:
console.log(findSubarrays([4, 2, 4])); // true
console.log(findSubarrays([1, 2, 3, 4, 5])); // false
console.log(findSubarrays([0, 0, 0])); // true
