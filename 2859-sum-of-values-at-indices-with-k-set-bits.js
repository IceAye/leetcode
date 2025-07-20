/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumIndicesWithKSetBits = function(nums, k) {
    function checkOnes(n) {
        let count = 0;
        while (n > 0) {
            n = n & (n - 1);
            count++;
        }
        return count;
    }
    return nums.reduce((acc, curr, ind) => acc + (checkOnes(ind) === k ? curr : 0), 0);
};

console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1)) // 13
console.log(sumIndicesWithKSetBits([4,3,2,1], 2)) // 1