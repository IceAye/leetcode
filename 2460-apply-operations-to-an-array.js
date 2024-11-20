const applyOperations = function (nums) {
    let zeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    return nums.reduce((acc, curr) => {
        curr > 0 ? acc[0].push(curr) : acc[1].push(curr);
        return acc;
    }, [[], []]).flat();
};

console.log(applyOperations([1,2,2,1,1,0])) // [1,4,2,0,0,0]
console.log(applyOperations([0,1])) // [1,0]

