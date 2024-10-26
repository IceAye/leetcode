// ❓ DESCRIPTION:
// You are given an integer array nums and an integer k.
// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
// The score of nums is the difference between the maximum and minimum elements in nums.
// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.
//
// ✅ SOLUTION (runtime 100%):
let smallestRangeI = function(nums, k) {
    let result = (Math.max(...nums) - k) - (Math.min(...nums) + k);
    return result >= 0 ? result : 0;
};

// 📌 TESTCASE:
console.log(smallestRangeI([1], 0)) // 0
console.log(smallestRangeI([0,10], 2)) // 6
console.log(smallestRangeI([1,3,6], 3)) // 0
