const triangleType = function(nums) {
    nums.sort((a, b) => a - b);
    let isTriangle = nums[0] + nums[1] > nums[2];
    if (isTriangle) {
        let set = new Set(nums);
        return set.size === 1 ? 'equilateral' : set.size === 2 ? 'isosceles' : 'scalene';
    }
    return 'none';
};

console.log(triangleType([3,3,3])) // "equilateral"
console.log(triangleType([3,4,5])) // "scalene"