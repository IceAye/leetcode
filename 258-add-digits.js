const addDigits = function (num) {
    let array = Array.from(num.toString(), Number);
    num = array.reduce((acc, curr) => acc + curr, 0);
    return num < 10 ? num : addDigits(num);
};

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
console.log(addDigits(234)); // 9