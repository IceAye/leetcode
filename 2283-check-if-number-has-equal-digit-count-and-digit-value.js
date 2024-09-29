// ❓ DESCRIPTION:
// You are given a 0-indexed string num of length n consisting of digits.
// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.
//
// ✅ SOLUTION:
let digitCount = function (num) {
    let array = Array.from(num, Number);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array.filter((item) => item === i).length) return false;
    }
    return true;
};

// 📌 TESTCASE:
console.log(digitCount("1210"));
console.log(digitCount("030"));