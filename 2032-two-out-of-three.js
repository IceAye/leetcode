// ❓ DESCRIPTION:
// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
//
// ✅ SOLUTION:
let twoOutOfThree = function (nums1, nums2, nums3) {
    let result = [];
    for (const num of nums1) {
        if (nums2.includes(num) || nums3.includes(num)) result.push(num);
    }
    for (const num of nums2) {
        if (nums3.includes(num)) result.push(num)
    }
    return [...new Set(result)];
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3, 1], [3, 1]));
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
