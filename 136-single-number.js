// ❓ DESCRIPTION:
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
// You must implement a solution with a linear runtime complexity and use only constant extra space.
//
// ✅ SOLUTION:
let singleNumber = function (nums) {
    let x = 0
    for (let num of nums) {
        x ^= num
    }
    return x;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
