// ❓ DESCRIPTION:
// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
//
// ✅ SOLUTION:
const maxProduct = function(nums) {
    nums.sort((a, b) => b - a);
    return (nums[0] - 1) * (nums[1] - 1);
};

// ✅SOLUTION (Python3)
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort(reverse = True)
        return (nums[0] - 1) * (nums[1] - 1)

// 📌 TESTCASE:
console.log(maxProduct([3,4,5,2])) // 12
console.log(maxProduct([1,5,4,5])) // 16
console.log(maxProduct([3,7])) // 12