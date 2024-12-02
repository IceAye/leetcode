// ❓ DESCRIPTION:
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
//
// ✅ SOLUTION 1 (runtime 42.22%, memory 27.94%):
const addDigits = function (num) {
    let array = Array.from(num.toString(), Number);
    num = array.reduce((acc, curr) => acc + curr, 0);
    return num < 10 ? num : addDigits(num);
};

// ✅ SOLUTION 2 (using digital root, runtime 76.74%, memory 86.73%)
const addDigits = function (num) {
    return 1 + ((num - 1) % 9);
};

// 📌 TESTCASE:
console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
console.log(addDigits(234)); // 9