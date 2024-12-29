// ❓ DESCRIPTION:
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//
// ✅ SOLUTION:
const containsDuplicate = function(nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
};

// 📌 TESTCASE:
console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true