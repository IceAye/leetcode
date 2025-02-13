const minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        let diff = nums[i + k - 1] - nums[i];
        result.push(diff);
    }
    return Math.min(...result);
};

console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9, 4, 1, 7], 2)); // 2
