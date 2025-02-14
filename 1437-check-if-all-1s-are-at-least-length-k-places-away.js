// ❓ DESCRIPTION:
// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.
//
// ✅ SOLUTION (100% runtime):
const kLengthApart = function (nums, k) {
    let prevIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (prevIndex !== -1 && i - prevIndex - 1 < k) {
                return false;
            }
            prevIndex = i;
        }
    }
    return true;
};

// 📌 TESTCASE:
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)); // false
console.log(kLengthApart([1, 1, 1, 1, 1], 0)); // true