// ❓ DESCRIPTION:
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
//
// ✅ SOLUTION:
const getCommon = function (nums1, nums2) {
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j])
            return nums1[i];
        else if (nums1[i] > nums2[j])
            j++;
        else
            i++;
    }

    return -1;
};

// 📌 TESTCASE:
console.log(getCommon([1, 2, 3], [2, 4])); // 2
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // 2