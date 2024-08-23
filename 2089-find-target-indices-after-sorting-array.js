let targetIndices = function (nums, target) {
    let indices = [];
    nums
        .sort((a, b) => a - b)
        .map((item, index) => {
            if (item === target) indices.push(index);
        });
    return indices;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 3));
console.log(targetIndices([1, 2, 5, 2, 3], 5));
