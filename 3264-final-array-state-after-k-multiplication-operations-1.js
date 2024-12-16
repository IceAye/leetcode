const getFinalState = function (nums, k, multiplier) {
    while (k > 0) {
        let min = Math.min(...nums);
        nums[nums.indexOf(min)] = min * multiplier;
        k--;
    }
    return nums;
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2)); // [8,4,6,5,6]
console.log(getFinalState([1, 2], 3, 4)); // [16,8]
