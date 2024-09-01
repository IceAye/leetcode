// ❓ DESCRIPTION:
// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
//
// Return the positive integer k. If there is no such integer, return -1.
//
// ✅ SOLUTION 1:
let findMaxK = function (nums) {
    let array = [];
    for (const num of nums) {
        if (nums.includes(-num)) array.push(num);
    }
    return array.length > 0 ? Math.max(...array) : -1;
};

// ✅ SOLUTION 2 (with set):
let findMaxK = function (nums) {
    let result = -1;
    let numSet = new Set(nums)
    for (const num of numSet) {
        if (numSet.has(-num)) result = Math.max(result, num);
    }
    return result;
};

console.log(findMaxK([-1, 2, -3, 3]));
console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
console.log(findMaxK([2, 8, 6, 7, -2, -3]));
