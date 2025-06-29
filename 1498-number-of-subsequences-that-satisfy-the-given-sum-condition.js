// ❓ DESCRIPTION:
// You are given an array of integers nums and an integer target.
//
// Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.
// 📅 (daily question 2025 June, 29th)
//
// ✅ SOLUTION:
const numSubseq = function(nums, target) {
    const MOD = 1e9 + 7;
    nums.sort((a, b) => a - b);
    let res = 0;
    let left = 0;
    let right = nums.length - 1;

    const pow = new Array(nums.length + 1);
    pow[0] = 1;
    for (let i = 1; i <= nums.length; i++) {
        pow[i] = (pow[i-1] * 2) % MOD;
    }

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            res = (res + pow[right - left]) % MOD;
            left++;
        } else {
            right--;
        }
    }

    return res;
};

// 📌 TESTCASE:
console.log(numSubseq([3,5,6,7], 9)) // 4
console.log(numSubseq([3,3,6,8], 10)) // 6
console.log(numSubseq([2,3,3,4,6,7], 12)) // 61