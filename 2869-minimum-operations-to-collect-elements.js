// ❓ DESCRIPTION:
// You are given an array nums of positive integers and an integer k.
// In one operation, you can remove the last element of the array and add it to your collection.
// Return the minimum number of operations needed to collect elements 1, 2, ..., k.
//
// ✅ SOLUTION (100% runtime):
const minOperations = function (nums, k) {
    if (nums.length === k) return k;

    let count = 0;
    let set = new Set();

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.size === k) return count;
        if (nums[i] <= k) {
            set.add(nums[i]);
        }
        count++;
    }
    return count;
};

// 📌 TESTCASE:
console.log(minOperations([3, 1, 5, 4, 2], 2)); // 4
console.log(minOperations([3, 1, 5, 4, 2], 5)); // 5
console.log(minOperations([3, 2, 5, 3, 1], 3)); // 4
console.log(minOperations([1,2], 1)); // 2