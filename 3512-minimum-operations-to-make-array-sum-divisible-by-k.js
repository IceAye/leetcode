const minOperations = function(nums, k) {
    return nums.reduce((acc, curr) => acc + curr, 0) %  k;
};

console.log(minOperations([3,9,7], 5)) // 4
console.log(minOperations([4,1,3], 4)) // 0
console.log(minOperations([3,2], 6)) // 5