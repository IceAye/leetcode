// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums and an integer k.
// Return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation.
// The set bits in an integer are the 1's present when it is written in binary.
// For example, the binary representation of 21 is 10101, which has 3 set bits.

// ✅ SOLUTION:

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

// 📌 TESTCASE:
console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1)) // 13
console.log(sumIndicesWithKSetBits([4,3,2,1], 2)) // 1