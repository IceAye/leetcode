// ❓ DESCRIPTION:
// Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.
//
// x mod y denotes the remainder when x is divided by y.
//
// ✅ SOLUTION:
let smallestEqual = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
};

console.log(smallestEqual([0,1,2]));
console.log(smallestEqual([4,3,2,1]));
console.log(smallestEqual([1,2,3,4,5,6,7,8,9,0]));