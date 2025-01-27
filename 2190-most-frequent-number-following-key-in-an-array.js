// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.
//
// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:
//
// 0 <= i <= nums.length - 2,
// nums[i] == key and,
// nums[i + 1] == target.
// Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.
//
// ✅ SOLUTION:
const mostFrequent = function(nums, key) {
    const map = new Map();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            map.set(nums[i + 1], map.get(nums[i + 1]) + 1 || 1)
        }
    }
    return [...map.keys()].filter(key => map.get(key) === Math.max(...[...map.values()]))[0]
};

// 📌 TESTCASE:
console.log(mostFrequent([1,100,200,1,100], 1)) // 100
console.log(mostFrequent([2,2,2,2,3], 2)) // 2