const maxSubsequence = function (nums, k) {
    const maxSumProviders = nums.toSorted((a, b) => b - a).slice(0, k);
    const map = new Map();

    const result = [];

    for (const num of maxSumProviders) {
        map.set(num, map.get(num) + 1 || 1);
    }

    let i = 0;
    while (result.length < maxSumProviders.length) {
        if (map.get(nums[i]) > 0) {
            result.push(nums[i]);
            map.set(nums[i], map.get(nums[i]) - 1);
        }
        i++;
    }

    return result;
};

console.log(maxSubsequence([2, 1, 3, 3], 2)); // [3,3]
console.log(maxSubsequence([-1, -2, 3, 4], 3)); // [-1,3,4]
console.log(maxSubsequence([3, 4, 3, 3], 2)); // [3,4]