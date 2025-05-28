const removeElement = function (nums, val) {
    let l = 0;
    let r = 0;
    while (r < nums.length) {
        if (nums[r] !== val) {
            nums[l] = nums[r];
            l++;
        }
        r++;
    }
    return l;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([], )); // 0
console.log(removeElement([2], 3)); // 1