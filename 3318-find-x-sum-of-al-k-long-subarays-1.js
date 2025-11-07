// ❓ DESCRIPTION:
// You are given an array nums of n integers and two integers k and x.
// The x-sum of an array is calculated by the following procedure:
// Count the occurrences of all elements in the array.
// Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
// Calculate the sum of the resulting array.
// Note that if an array has less than x distinct elements, its x-sum is the sum of the array.
// Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].

// ❗ CONSTRAINTS:
// 1 <= n == nums.length <= 50
// 1 <= nums[i] <= 50
// 1 <= x <= k <= nums.length

// ✅ SOLUTION:
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findXSum = function(nums, k, x) {
    const answer = [];
    let j = 0;
    while (answer.length < nums.length - k + 1) {
        const currentArr = nums.slice(j, j + k);

        const freq = new Map();
        for (const num of currentArr) {
            freq.set(num, (freq.get(num) || 0) + 1)
        }
        let sorted = [...freq.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]).slice(0, x).reduce((acc, [val, count]) => acc + val * count, 0);
        answer.push(sorted);
        j++;
    }
    return answer;
};

// 📌 TESTCASE:
console.log(findXSum([1,1,2,2,3,4,2,3], 6,2)) // [6,10,12]
console.log(findXSum([3,8,7,8,7,5], 2,2)) // [11,15,15,15,12]