const arraySign = function (nums) {
    let product = nums.reduce((acc, curr) => acc * curr);
    return product > 0 ? 1 : product < 0 ? -1 : 0;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign([1, 5, 0, 2, -3])); // 0
console.log(arraySign([-1, 1, -1, 1, -1])); // -1