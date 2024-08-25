// ❓ DESCRIPTION:
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
//
// Return any array that satisfies this condition.
//
// ✅ SOLUTION 1:
let sortArrayByParity = function (nums) {
    let even = [];
    let odd = [];

    for (const num of nums) {
        num % 2 === 0 ? even.push(num) : odd.push(num);
    }

    return [...even, ...odd];
};

// ✅ SOLUTION 2:
let sortArrayByParity = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        while (left < right && nums[left] % 2 === 0) left++;
        while (left < right && nums[right] % 2 !== 0) right--;
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }

    return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
