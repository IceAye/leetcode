/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums , k) {
    let windowSum = nums.slice(0 , k).reduce((acc , curr) => acc + curr , 0);
    let max = windowSum / k;

    let left = 0;
    let right = k;
    while (right < nums.length) {
        windowSum = windowSum - nums[left] + nums[right];
        max = Math.max(windowSum / k , max);
        left++;
        right++;
    }
    return max;
};

console.log(findMaxAverage([1 , 12 , -5 , -6 , 50 , 3] , 4)); // 12.75000
console.log(findMaxAverage([5] , 1)); // 5.00000