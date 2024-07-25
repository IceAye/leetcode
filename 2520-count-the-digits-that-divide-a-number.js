// ❓ DESCRIPTION:
// Given an integer num, return the number of digits in num that divide num.
//
// An integer val divides nums if nums % val == 0.
//
// ✅ SOLUTION:

let countDigits = function (num) {
    let sum = 0;
    let array = Array.from(String(num).split(""), Number);
    for (let i = 0; i < array.length; i++) {
        num % array[i] === 0 ? sum++ : sum;
    }
    return sum;
};

console.log(countDigits(121));
console.log(countDigits(1248));
