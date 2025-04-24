const countCompleteSubarrays = function(nums) {
    const target = new Set(nums).size;
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            seen.add(nums[j]);
            if (seen.size === target) {
                count += n - j;
                break;
            }
        }
    }
    return count;
};

console.log(countCompleteSubarrays([1,3,1,2,2])) // 4
console.log(countCompleteSubarrays([5,5,5,5])) // 10