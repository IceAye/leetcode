/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target , nums) {
    let min = Infinity;

    let left = 0;
    let right = 0;

    let sum = 0;

    while (right < nums.length) {
        sum += nums[right];
        right++;

        while (sum >= target) {
            min = Math.min(min , right - left);
            sum -= nums[left];
            left++;
        }
    }

    return min | 0;
};

console.log(minSubArrayLen(7 , [2 , 3 , 1 , 2 , 4 , 3])); // 2
console.log(minSubArrayLen(4 , [1 , 4 , 4])); // 1
console.log(minSubArrayLen(11 , [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1])); // 0