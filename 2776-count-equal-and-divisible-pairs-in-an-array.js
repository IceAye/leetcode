let countPairs = function (nums, k) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            nums[i] === nums[j] && (i * j) % k === 0 ? result++ : 0
        }
    }
    return result;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
console.log(countPairs([1, 2, 3, 4], 1));