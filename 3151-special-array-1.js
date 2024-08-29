let isArraySpecial = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] + nums[i + 1]) % 2 === 0) return false;
    }
    return true;
};

console.log(isArraySpecial([1]));
console.log(isArraySpecial([2, 1, 4]));
console.log(isArraySpecial([4, 3, 1, 6]));
