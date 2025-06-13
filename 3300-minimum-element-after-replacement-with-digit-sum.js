// ❓ DESCRIPTION:
// You are given an integer array nums.
// You replace each element in nums with the sum of its digits.
// Return the minimum element in nums after all replacements.
//
// ✅ SOLUTION:
const minElement = function(nums) {
    return Math.min(...nums.map(num => [...num.toString()].reduce((acc, curr) => acc + +curr, 0)));
};

// 📌 TESTCASE:
console.log(minElement([10,12,13,14])) // 1
console.log(minElement([1,2,3,4])) // 1
console.log(minElement([999,19,199])) // 10