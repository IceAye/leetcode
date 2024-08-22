// ❓ DESCRIPTION:
// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
//
// Return the selected integer.
// ✅ SOLUTION 1:
let findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1;

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    const any = (item) => item !== min && item !== max;

    return nums.find(any);
};

// ✅ SOLUTION 2:
let findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1;
    return nums.sort((a, b) => a - b)[1];
};

// ✅ SOLUTION 3:
let findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1;

    let min = Math.min(nums[0], nums[1]);
    let max = Math.max(nums[0], nums[1])

    if (nums[2] > max) return max;
    if (nums[2] < min) return min;
    return nums[2];
};

console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
