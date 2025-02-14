const kLengthApart = function (nums, k) {
    let prevIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (prevIndex !== -1 && i - prevIndex - 1 < k) {
                return false;
            }
            prevIndex = i;
        }
    }
    return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)); // false
console.log(kLengthApart([1, 1, 1, 1, 1], 0)); // true