// ❓ DESCRIPTION:
// Given a balanced parentheses string s, return the score of the string.
// The score of a balanced parentheses string is based on the following rule:
// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// ❗ CONSTRAINTS:
// 2 <= s.length <= 50
// s consists of only '(' and ')'.
// s is a balanced parentheses string.

// ✅ SOLUTION:
/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = function(s) {
    const stack = [];

    for (const char of s) {
        if (char === '(') {
            stack.push(0);
        } else {
            let innerResult = 0;

            while (stack[stack.length - 1] !== 0) {
                innerResult += stack.pop();
            }
            stack.pop();

            stack.push(innerResult === 0 ? 1 : 2 * innerResult)
        }
    }

    return stack.reduce((acc, curr) => acc + curr, 0);
};

// 📌 TESTCASE:
console.log(scoreOfParentheses("()")) // 1
console.log(scoreOfParentheses("(())")) // 2
console.log(scoreOfParentheses("()()")) // 2
console.log(scoreOfParentheses("(()(()))")) // 6