// ❓ DESCRIPTION:
// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
//
// Return the minimum number of operations to make all elements of nums divisible by 3.
//
// ✅ SOLUTION:

let minimumOperations = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += Math.min(nums[i] % 3, 3 - (nums[i] % 3))
    }
    return result
}

console.log(minimumOperations([1,2,3,4]))
console.log(minimumOperations([3,6,9]))