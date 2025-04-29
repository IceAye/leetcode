const countSubarrays = function (nums, k) {
    let result = 0;
    let count = 0;

    let max = Math.max(...nums);
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === max) count++;
        while (count >= k) {
            if (nums[left] === max) count--;
            left++;
        }
        result += left;
    }
    return result;
};

console.log(countSubarrays([1, 3, 2, 3, 3], 2)); // 6
console.log(countSubarrays([1, 4, 2, 1], 3)); // 0
