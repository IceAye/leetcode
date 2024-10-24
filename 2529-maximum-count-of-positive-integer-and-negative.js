// ❓ DESCRIPTION:
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
//
// ✅ SOLUTION (runtime 96.77%):
let maximumCount = function (nums) {
    return Math.max(...nums.reduce((acc, curr) => {
        curr < 0 ? acc[0] += 1 : curr > 0 ? acc[1] += 1 : 0;
        return acc;
    }, [0, 0]))
};

// 📌 TESTCASE:
console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314])); // 4