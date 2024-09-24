// ❓ DESCRIPTION:
// You are given a non-negative integer array nums. In one operation, you must:
// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.
//
// ✅ SOLUTION:
let minimumOperations = function(nums) {
    let set = new Set(nums);
    return set.has(0) ? set.size - 1 : set.size;
};

// 📌 TESTCASE:
console.log(minimumOperations([1,5,0,3,5]))
console.log(minimumOperations([0]))
