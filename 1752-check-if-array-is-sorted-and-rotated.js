const check = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) count++;
        if (count === 2) return false;
    }
    return !(count === 1 && nums[0] < nums[nums.length - 1]);
};

console.log(check([3,4,5,1,2])) // true
console.log(check([2,1,3,4])) // false
console.log(check([1,2,3])) // true
console.log(check([3,2,1])) // false
