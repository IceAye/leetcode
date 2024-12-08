// ❓ DESCRIPTION:
// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
// Notice that x does not have to be an element in nums.
// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.
//
// ✅ SOLUTION:
const specialArray = function(nums) {
    let i = 0;
    while (i <= nums.length) {
        let count = 0;
        for (const num of nums) {
            if (num >= i) count++;
        }
        if (i === count) {
            return i;
        } else {
            i++
        }
    }
    return -1;
};

// 📌 TESTCASE:
console.log(specialArray([3,5])) // 2
console.log(specialArray([0,0])) // -1
console.log(specialArray([0,4,3,0,4])) // 3
