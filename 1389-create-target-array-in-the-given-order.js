let createTargetArray = function (nums, index) {
    let targetArray = [];
    for (let i = 0; i < index.length; i++) {
        targetArray.splice(index[i], 0, nums[i]);
    }
    return targetArray;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTargetArray([1], [0]));