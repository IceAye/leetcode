const countElements = function(nums) {
    if (new Set(nums).size < 3) return 0;
    nums.sort((a, b) => a - b);
    let excludes = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[0] || nums[i] === nums[nums.length - 1]) excludes++;
    }
    return nums.length - 2 - excludes;
};

console.log(countElements([11,7,2,15])) // 2
console.log(countElements([-3,3,3,90])) // 2