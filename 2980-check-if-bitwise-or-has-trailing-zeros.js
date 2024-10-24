let hasTrailingZeros = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] | nums[j]).toString(2).endsWith("0")) return true;
        }
    }
    return false;
};

console.log(hasTrailingZeros([1, 2, 3, 4, 5])); // true
console.log(hasTrailingZeros([2, 4, 8, 16])); // true
console.log(hasTrailingZeros([1, 3, 5, 7, 9])); // false