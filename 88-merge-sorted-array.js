// ❓ DESCRIPTION:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
//
// ✅ SOLUTION (100% runtime, 45.73% memory):
const merge = function(nums1, m, nums2, n) {
    let l = m - 1;
    let r = n - 1;
    let i = nums1.length - 1
    while (r >=0) {
        if (l >= 0 && nums1[l] > nums2[r]) {
            nums1[i] = nums1[l];
            l--;
        } else {
            nums1[i] = nums2[r];
            r--;
        }
        i--;
    }
    return nums1;
};

// 📌 TESTCASE:
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)) // [1]
console.log(merge([0], 0, [1], 1)) // [1]
