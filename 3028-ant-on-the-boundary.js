let returnToBoundaryCount = function (nums) {
    let count = 0;
    let temp = 0;
    for (const num of nums) {
        temp += num;
        if (temp === 0) count++;
    }
    return count;
};

console.log(returnToBoundaryCount([2, 3, -5]));
console.log(returnToBoundaryCount([3, 2, -3, -4]));
