const findDisappearedNumbers = function (nums) {
    let n = nums.length;
    let result = [];
    let set = new Set(nums);
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) result.push(i);
    }
    return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]