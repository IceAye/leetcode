let targetIndices = function (nums, target) {
    let sorted = nums.sort((a, b) => a - b);
    let indices = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === target) indices.push(i);
    }
    return indices;
};
console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 3));
console.log(targetIndices([1, 2, 5, 2, 3], 5));
