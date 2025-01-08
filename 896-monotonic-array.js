const isMonotonic = function (nums) {
    let start = nums.find((num) => nums[0] !== num);
    if (start === undefined) return true;
    if (nums[0] < start) {
        for (let i = 1; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) return false;
        }
    } else if (nums[0] > start) {
        for (let i = 1; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) return false;
        }
    }
    return true;
};

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 3, 2])); // false
console.log(isMonotonic([1, 1, 1])); // true