// ❓ DESCRIPTION:
// You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:
// Replace each even number with 0.
// Replace each odd numbers with 1.
// Sort the modified array in non-decreasing order.
// Return the resulting array after performing these operations.
//
// ✅ SOLUTION 1 (71.17% runtime, 62.80% memory):
const transformArray = function(nums) {
    return nums.map(item => item % 2 === 0 ? 0 : 1).sort();
};

// ✅ SOLUTION 2 (38.13% runtime, 18.03% memory):
const transformArray = function(nums) {
    let zeros = [];
    let ones = [];

    for (const num of nums) {
        (num % 2 === 0) ? zeros.push(0) : ones.push(1)
    }
    return [...zeros, ...ones];
};

// ✅ SOLUTION 3 (7.22% runtime, 51.93% memory):
const transformArray = function(nums) {
    let countZeros = 0;

    for (const num of nums) {
        if (num % 2 === 0) countZeros++;
    }
    return new Array(countZeros).fill(0).concat(new Array(nums.length - countZeros).fill(1));
};

// 📌 TESTCASE:
console.log(transformArray([4,3,2,1])) // [0,0,1,1]
console.log(transformArray([1,5,1,4,2])) // [0,0,1,1,1]