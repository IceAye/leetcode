/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function(nums, limit) {
    const maxQ = [];
    const minQ = [];

    let result = 0;

    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        const curr = nums[right];
        while (maxQ.length && curr > maxQ[maxQ.length - 1]) {
            maxQ.pop();
        }
        maxQ.push(curr);

        while (minQ.length && curr < minQ[minQ.length - 1]) {
            minQ.pop();
        }
        minQ.push(curr);

        while (maxQ[0] - minQ[0] > limit) {
            if (nums[left] === maxQ[0]) maxQ.shift();
            if (nums[left] === minQ[0]) minQ.shift();
            left++;

        }
        result = Math.max(result, right - left + 1);
    }

    return result;
};

console.log(longestSubarray([10,1,2,4,7,2],  5)) // 4
console.log(longestSubarray([4,2,2,2,4,4,2,2],  0)) // 3