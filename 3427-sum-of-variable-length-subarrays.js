const subarraySum = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let start = Math.max(0, i - nums[i])
        result += nums.slice(start, i + 1).reduce((acc, curr) => acc + curr, 0);
    }
    return result;
};

console.log(subarraySum([2,3,1])) // 11
console.log(subarraySum([3,1,1,2])) // 13