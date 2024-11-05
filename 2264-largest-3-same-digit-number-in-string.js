let largestGoodInteger = function(num) {
    let result = [];
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) result.push(+num[i]);
    }
    let max = Math.max(...result);
    return max < 0 ? "" : max.toString().repeat(3);
};

console.log(largestGoodInteger("6777133339")) // "777"
console.log(largestGoodInteger("2300019")) // "000"
console.log(largestGoodInteger("42352338")) // ""
console.log(largestGoodInteger("74444")) // "444"