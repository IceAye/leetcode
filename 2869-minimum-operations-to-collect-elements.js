const minOperations = function (nums, k) {
    if (nums.length === k) return k;

    let count = 0;
    let set = new Set();

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.size === k) return count;
        if (nums[i] <= k) {
            set.add(nums[i]);
        }
        count++;
    }
    return count;
};

console.log(minOperations([3, 1, 5, 4, 2], 2)); // 4
console.log(minOperations([3, 1, 5, 4, 2], 5)); // 5
console.log(minOperations([3, 2, 5, 3, 1], 3)); // 4
console.log(minOperations([1,2], 1)); // 2