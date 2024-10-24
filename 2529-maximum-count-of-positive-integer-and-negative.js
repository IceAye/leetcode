let maximumCount = function (nums) {
    return Math.max(...nums.reduce((acc, curr) => {
        curr < 0 ? acc[0] += 1 : curr > 0 ? acc[1] += 1 : 0;
        return acc;
    }, [0, 0]))
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314])); // 4