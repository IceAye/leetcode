let singleNumber = function (nums) {
    let x = 0
    for (let num of nums) {
        x ^= num
    }
    return x;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
