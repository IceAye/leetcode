// ❓ DESCRIPTION:
// You are given an integer array digits, where each element is a digit. The array may contain duplicates.
//
// You need to find all the unique integers that follow the given requirements:
//
// The integer consists of the concatenation of three elements from digits in any arbitrary order.
// The integer does not have leading zeros.
// The integer is even.
// For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.
//
// Return a sorted array of the unique integers.
// 📅 (daily question 2025, May 12th):
//
// ✅ SOLUTION (81.03% runtime, 31.09% memory):
const findEvenNumbers = function(digits) {
    let result = [];

    let map = new Map();
    let hasEvens = false;
    for (const digit of digits) {
        if (digit % 2 === 0) hasEvens = true;
        map.set(digit, map.get(digit) + 1 || 1)
    }

    if (hasEvens) {
        for (let num = 100; num < 999; num += 2) {
            let numbers = num.toString();

            let currentMap = new Map();
            for (const item of numbers) {
                currentMap.set(+item, currentMap.get(+item) + 1 || 1);
            }

            let isValid = true;

            for (const el of currentMap.keys()) {
                if (!map.has(el) || map.get(el) < currentMap.get(el)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) result.push(num);
            isValid = true;
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(findEvenNumbers([2,1,3,0])) // [102,120,130,132,210,230,302,310,312,320]
console.log(findEvenNumbers([2,2,8,8,2])) // [222,228,282,288,822,828,882]
console.log(findEvenNumbers([3,7,5])) // []