// ❓ DESCRIPTION:
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
//
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
//
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
//
// ✅ SOLUTION (100% runtime< 59.52% memory):
const removeElement = function (nums, val) {
    let l = 0;
    let r = 0;
    while (r < nums.length) {
        if (nums[r] !== val) {
            nums[l] = nums[r];
            l++;
        }
        r++;
    }
    return l;
};

// 📌 TESTCASE:
console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([], )); // 0
console.log(removeElement([2], 3)); // 1