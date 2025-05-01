const transformArray = function(nums) {
    return nums.map(item => item % 2 === 0 ? 0 : 1).sort();
};

console.log(transformArray([4,3,2,1])) // [0,0,1,1]
console.log(transformArray([1,5,1,4,2])) // [0,0,1,1,1]