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

console.log(numSubseq([3,5,6,7], 9)) // 4
console.log(numSubseq([3,3,6,8], 10)) // 6
console.log(numSubseq([2,3,3,4,6,7], 12)) // 61