// ❓ DESCRIPTION:
// You are given an integer array nums of even length. You have to split the array into two parts nums1 and nums2 such that:
//
// nums1.length == nums2.length == nums.length / 2.
// nums1 should contain distinct elements.
// nums2 should also contain distinct elements.
// Return true if it is possible to split the array, and false otherwise.
//
// ✅ SOLUTION:
const isPossibleToSplit = function(nums) {
    const count = new Map ();
    for (const num of nums) {
        count.set(num, count.get(num) + 1 || 1);
        if (count.get(num) > 2) return false;
    }
    return true;
};

// 📌 TESTCASE:
console.log(isPossibleToSplit([1,1,2,2,3,4])) // true
console.log(isPossibleToSplit([1,1,1,1])) // false