// ❓ DESCRIPTION:
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero
// elements.
// Note that you must do this in-place without making a copy of the array.
//
// ✅ SOLUTION:
const moveZeroes = function (nums) {
    let zeroes = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroes.push(i);
        }
    }
    for (let i = zeroes.length - 1; i >= 0; i--) {
        nums.splice(zeroes[i] , 1);
        nums.push(0);
    }
    return nums;
};

// 📌 TESTCASE:
console.log(moveZeroes([0 , 1 , 0 , 3 , 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0 , 0 , 1])); // [1,0,0]