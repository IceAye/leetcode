/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let sum = 0;
    let maxSum = 0;

    for (let right = 0; right < nums.length; right++) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        sum += nums[right];
        maxSum = Math.max(maxSum , sum);
    }
    return maxSum;
};

console.log(maximumUniqueSubarray([4 , 2 , 4 , 5 , 6])); // 17
console.log(maximumUniqueSubarray([5 , 2 , 1 , 2 , 5 , 2 , 1 , 2 , 5])); // 8