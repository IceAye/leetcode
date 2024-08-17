// ❓ DESCRIPTION:
// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
//
// ✅ SOLUTION:
let findGCD = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for (let i = min; i > 0; i--) {
        if (max % i === 0 && min % i === 0) return i;
    }
};

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
console.log(findGCD([3, 3]));