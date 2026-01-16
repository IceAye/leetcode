const alternatingSum = function(nums) {
    return nums.reduce((acc, curr, index) => {
        index % 2 === 0 ? acc += curr : acc -= curr;
        return acc;
    }, 0);
};

console.log(alternatingSum([1,3,5,7])) // -4
console.log(alternatingSum([100])) // 100