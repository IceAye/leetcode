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

console.log(findXSum([1,1,2,2,3,4,2,3], 6,2)) // [6,10,12]
console.log(findXSum([3,8,7,8,7,5], 2,2)) // [11,15,15,15,12]