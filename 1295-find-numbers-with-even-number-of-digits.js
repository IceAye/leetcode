// ❓ DESCRIPTION:
// Given an array nums of integers, return how many of them contain an even number of digits.
//
// ✅ SOLUTION:
let findNumbers = function (nums) {
    return nums.reduce((even, num) => (String(num).length % 2 ? even : even + 1), 0);
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
