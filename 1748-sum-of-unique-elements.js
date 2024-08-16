let sumOfUnique = function (nums) {
    let sum = 0;
    for (const num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) sum += num;
    }
    return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
