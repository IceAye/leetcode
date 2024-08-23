// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums and a target element target.
//
// A target index is an index i such that nums[i] == target.
//
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
//
// ✅ SOLUTION:
let targetIndices = function (nums, target) {
    let indices = [];
    nums
        .sort((a, b) => a - b)
        .map((item, index) => {
            if (item === target) indices.push(index);
        });
    return indices;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 3));
console.log(targetIndices([1, 2, 5, 2, 3], 5));
