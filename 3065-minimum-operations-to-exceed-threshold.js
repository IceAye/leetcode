let minOperations = function(nums, k) {
    return nums.filter(item => item < k).length
}

console.log('Output: ' , minOperations([2,11,10,1,3], 10))
console.log('Output: ' , minOperations([1,1,2,4,9], 1))
console.log('Output: ' , minOperations([1,1,2,4,9], 9))