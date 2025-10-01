// ❓ DESCRIPTION:
// Given a string s which represents an expression, evaluate this expression and return its value.
// The integer division should truncate toward zero.
// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// ❗ CONSTRAINTS:
// 1 <= s.length <= 3 * 10^5
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 2^31 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

// ✅ SOLUTION:
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
    let result = 0;
    let lastNumber = 0;
    let currentNumber = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (/\d/.test(char)) {
            currentNumber = currentNumber * 10 + Number(char);
        }

        if (/\D/.test(char) && char !== ' ' || i === s.length - 1) {
            switch (sign) {
                case '+':
                    result += lastNumber;
                    lastNumber = currentNumber;
                    break;
                case '-':
                    result += lastNumber;
                    lastNumber = -currentNumber;
                    break;
                case '*':
                    lastNumber *= currentNumber;
                    break;
                case '/':
                    lastNumber = Math.trunc(lastNumber / currentNumber);
                    break;
            }

            sign = char;
            currentNumber = 0;
        }
    }

    return result + lastNumber;
};

// 📌 TESTCASE:
console.log(calculate('3+2*2')); // 7
console.log(calculate(' 3/2 ')); // 1
console.log(calculate(' 3+5 / 2 ')); // 5
console.log(calculate('4*4+3')); // 19
console.log(calculate('4*4-3 - 1')); // 12
