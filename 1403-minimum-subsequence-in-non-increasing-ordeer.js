let minSubsequence = function (nums) {
    nums.sort((a, b) => b - a)
    let right = nums.reduce((a, b) => a + b);
    let left = 0;

    let i = 0;
    while (left <= right) {
        left += nums[i]
        right -= nums[i]
        i++
    }
    return nums.slice(0, i)
};

console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4,4,7,6,7]));
console.log(minSubsequence([6]));
console.log(minSubsequence([8,8]));
console.log(minSubsequence([8,8,7]));
console.log(minSubsequence([3,5]));
