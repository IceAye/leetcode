const minimumCost = function(nums) {
    let sorted = nums.slice(1).sort((a, b) => a - b);
    return nums[0] + sorted[0] + sorted[1];
};

console.log(minimumCost([1,2,3,12])) // 6
console.log(minimumCost([5,4,3])) // 12
console.log(minimumCost([10,3,1,1])) // 12