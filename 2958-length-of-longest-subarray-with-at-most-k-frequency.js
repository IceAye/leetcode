/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = function(nums , k) {
    const counter = new Map();

    let max = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        counter.set(nums[right] , (counter.get(nums[right]) || 0) + 1);

        while (counter.get(nums[right]) > k) {
            counter.set(nums[left] , counter.get(nums[left]) - 1);
            if (counter.get(nums[left]) === 0) counter.delete(nums[left]);
            left++;
        }

        max = Math.max(max , right - left + 1);
        right++;
    }

    return max;
};

console.log(maxSubarrayLength([1 , 2 , 3 , 1 , 2 , 3 , 1 , 2] , k = 2)); // 6
console.log(maxSubarrayLength([1 , 2 , 1 , 2 , 1 , 2 , 1 , 2] , k = 1)); // 2
console.log(maxSubarrayLength([5 , 5 , 5 , 5 , 5 , 5 , 5] , k = 4)); // 4