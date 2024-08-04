// ❓ DESCRIPTION:
// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums
// after separating them in the same order they appear in nums.
// To separate the digits of an integer is to get all the digits it has in the same order.
//
// 📌 EXAMPLE:
// 10921 --> [1,0,9,2,1]
//
// ✅ SOLUTION:
let separateDigits = function ( nums ) {
    return Array.from(nums.join("") , Number);
};

console.log(separateDigits([13 , 25 , 83 , 77]));
console.log(separateDigits([7 , 1 , 3 , 9]));