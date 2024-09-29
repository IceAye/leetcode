// ❓ DESCRIPTION:
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
//
// ✅ SOLUTION:
let sortedSquares = function (nums) {
    return nums.map((item) => item ** 2).sort((a,b) => a - b);
};
// 📌 TESTCASE:
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));