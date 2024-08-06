let selfDividingNumbers = function (left, right) {
    let array = [];
    let isDivisible = false;
    for (let i = left; i <= right; i++) {
        let digits = Array.from(i.toString().split(""), Number);

        for (let j = 0; j < digits.length; j++) {
            if (i % digits[j] === 0 && digits[j] !== 0) {
                isDivisible = true;
            } else {
                isDivisible = false;
                break;
            }
        }
        if (isDivisible) array.push(i);
    }
    return array;
};

console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));