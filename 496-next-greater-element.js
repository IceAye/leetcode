// ❓ DESCRIPTION:
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
//
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
//
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
//
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
//
// ✅ SOLUTION:
let nextGreaterElement = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] < nums2[nums2.indexOf(nums1[i]) + j]) {
                result.push(nums2[nums2.indexOf(nums1[i]) + j])
                break
            }
        }
        if (result.length === i && nums1[i] >= nums2.at(-1)) result.push(-1)
    }
    return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]));
console.log(nextGreaterElement([2,1,3], [2,3,1]));
