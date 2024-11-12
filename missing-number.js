const missingNumber = function(nums) {
    let sum = (1 + nums.length) * nums.length / 2;
    return sum - nums.reduce((acc, curr) => acc + curr, 0);
};

console.log(missingNumber([3,0,1])) // 2
console.log(missingNumber([0,1])) // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8