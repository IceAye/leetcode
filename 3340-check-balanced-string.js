// ❓ DESCRIPTION:
// You are given a string num consisting of only digits. A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.
// Return true if num is balanced, otherwise return false.

// ✅ SOLUTION (100% runtime, 87.14% memory):
/**
 * @param {string} num
 * @return {boolean}
 */
const isBalanced = function(num) {
    let sumOfEvens = 0;
    let sumOfOdds = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            sumOfEvens += +num[i];
        } else {
            sumOfOdds += +num[i];
        }
    }
    return sumOfOdds === sumOfEvens;
};

// 📌 TESTCASE:
console.log(isBalanced("1234")) // false
console.log(isBalanced("24123")) // true