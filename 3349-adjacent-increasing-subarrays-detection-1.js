/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const hasIncreasingSubarrays = function(nums, k) {
    if (k === 1) return nums.length >= 2;

    let required = 0;
    for (let i = 1, j = i + k; j < nums.length; i++, j = i + k) {
        if (nums[i] > nums[i - 1] && nums[j] > nums[j - 1]) {
            required++;
            if (required === k - 1) return true;
        } else {
            required = 0;
        }
    }
    return false;
};

console.log(hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1], 3)) // true
console.log(hasIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7], 5)) // false
console.log(hasIncreasingSubarrays([-15,19], 1)) // true
console.log(hasIncreasingSubarrays([5,8,-2,-1], 2)) // true
console.log(hasIncreasingSubarrays([8,9,13,-10,-9,-3], 3)) // true