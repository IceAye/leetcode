const getMaximumXor = function(nums, maximumBit) {
    const result = [];

    const max = Math.pow(2, maximumBit) - 1;
    let preXOR = nums.reduce((acc, curr) => acc ^ curr);

    for (let i = 0; i < nums.length; i++) {
        result.push(preXOR ^ max);
        preXOR ^= nums[nums.length - 1 - i];
    }

    return result;
};

console.log(getMaximumXor([0,1,1,3], 2)) // [0,3,2,3]
console.log(getMaximumXor([2,3,4,7], 3)) // [5,2,6,5]
console.log(getMaximumXor(    [0,1,2,2,5,7], 3)) // [4,3,6,4,6,7]

