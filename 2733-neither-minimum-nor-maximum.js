// SOLUTION 1:
let findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1;

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    const any = (item) => item !== min && item !== max;

    return nums.find(any);
};

// SOLUTION 2:
let findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1;
    return nums.sort((a, b) => a - b)[1];
};



console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
