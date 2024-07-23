// ❓ DESCRIPTION:
// You are given a 1-indexed integer array nums of length n.
//
// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.
//
// Return the sum of the squares of all special elements of nums.
//
// ✅ SOLUTION:
let sumOfSquares = function (nums) {
    let result = 0;
    for (let i = 1; i <= nums.length; i++) {
        if (nums.length % i === 0) {
            result += Math.pow(nums[i - 1], 2);
        }
    }
    return result;
}

console.log(sumOfSquares([1, 2, 3, 4]));
console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));