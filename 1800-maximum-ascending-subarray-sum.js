const maxAscendingSum = function (nums) {
    let max = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            max = Math.max(max, currentSum);
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }
    }

    return Math.max(max, currentSum);
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); // 65
console.log(maxAscendingSum([10, 20, 30, 40, 50])); // 150
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])); // 33