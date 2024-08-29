// ❓ DESCRIPTION:
// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.
//
// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.
//
// ✅ SOLUTION:
let isArraySpecial = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] + nums[i + 1]) % 2 === 0) return false;
    }
    return true;
};

console.log(isArraySpecial([1]));
console.log(isArraySpecial([2, 1, 4]));
console.log(isArraySpecial([4, 3, 1, 6]));
