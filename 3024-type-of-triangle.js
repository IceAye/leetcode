// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.
//
// A triangle is called equilateral if it has all sides of equal length.
// A triangle is called isosceles if it has exactly two sides of equal length.
// A triangle is called scalene if all its sides are of different lengths.
// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.
//
// ✅ SOLUTION:
const triangleType = function(nums) {
    nums.sort((a, b) => a - b);
    let isTriangle = nums[0] + nums[1] > nums[2];
    if (isTriangle) {
        let set = new Set(nums);
        return set.size === 1 ? 'equilateral' : set.size === 2 ? 'isosceles' : 'scalene';
    }
    return 'none';
};

// 📌 TESTCASE:
console.log(triangleType([3,3,3])) // "equilateral"
console.log(triangleType([3,4,5])) // "scalene"