const transformArray = function(nums) {
    return nums.map(item => item % 2 === 0 ? 0 : 1).sort();
};

const transformArray = function(nums) {
    let zeros = [];
    let ones = [];

    for (const num of nums) {
        (num % 2 === 0) ? zeros.push(0) : ones.push(1)
    }
    return [...zeros, ...ones];
};

const transformArray = function(nums) {
    let countZeros = 0;

    for (const num of nums) {
        if (num % 2 === 0) countZeros++;
    }
    return new Array(countZeros).fill(0).concat(new Array(nums.length - countZeros).fill(1));
};

console.log(transformArray([4,3,2,1])) // [0,0,1,1]
console.log(transformArray([1,5,1,4,2])) // [0,0,1,1,1]