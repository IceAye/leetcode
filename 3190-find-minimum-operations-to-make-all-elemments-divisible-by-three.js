let minimumOperations = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += Math.min(nums[i] % 3, 3 - (nums[i] % 3))
    }
    return result
}

console.log(minimumOperations([1,2,3,4]))
console.log(minimumOperations([3,6,9]))