const findIndices = function (nums, indexDifference, valueDifference) {
    if (indexDifference === 0 && valueDifference === 0 && nums.length === 1)
        return [0, 0];
    for (let i = 0; i < nums.length - indexDifference; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (
                Math.abs(nums[i] - nums[j]) >= valueDifference &&
                Math.abs(i - j) >= indexDifference
            ) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

console.log(findIndices([5, 1, 4, 1], 2, 4)); // [0,3]
console.log(findIndices([2, 1], 0, 0)); // [0,0]
console.log(findIndices([1, 2, 3], 2, 4)); // [-1,-1]
console.log(findIndices([0], 0, 0)); // [0,0]