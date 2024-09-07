let sumOfEncryptedInt = function (nums) {
    let result = 0;
    for (let num of nums) {
        let array = Array.from(num.toString(), Number);
        let max = Math.max(...num.toString());

        num = +array.map(() => max).join("");
        result += num;
    }
    return result;
};

console.log(sumOfEncryptedInt([1, 2, 3]));
console.log(sumOfEncryptedInt([10, 21, 31]));
