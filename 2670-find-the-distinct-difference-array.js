let distinctDifferenceArray = function (nums) {
    let result = [];

    for (let i = 1; i <= nums.length; i++) {
        let prefix = new Set(nums.slice(0, i)).size;
        let suffix = new Set(nums.slice(i)).size;

        result.push(prefix - suffix);
    }

    return result;
};

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
console.log(distinctDifferenceArray([3, 2, 3, 4, 2]));
