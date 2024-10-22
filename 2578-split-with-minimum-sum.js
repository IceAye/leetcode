// ❓ DESCRIPTION:
// Given a positive integer num, split it into two non-negative integers num1 and num2 such that:
// The concatenation of num1 and num2 is a permutation of num.
// In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
// num1 and num2 can contain leading zeros.
// Return the minimum possible sum of num1 and num2.
// Notes:
// It is guaranteed that num does not contain any leading zeros.
// The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.
//
// ✅ SOLUTION (runtime 100%):
let splitNum = function (num) {
    let array = [...num.toString()].sort();
    let [num1, num2] = array.reduce((acc, currentValue, currentIndex) => {
        acc[currentIndex % 2] += currentValue;
        return acc;
    }, ["", ""])
    return +num1 + +num2;
};

// 📌 TESTCASE:
console.log(splitNum(4325)); // 59
console.log(splitNum(687)); // 75
console.log(splitNum(11)); // 2
