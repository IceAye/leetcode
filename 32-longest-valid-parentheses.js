// ❓ DESCRIPTION:
// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

// ❗ CONSTRAINTS:
// 0 <= s.length <= 3 * 10^4
// s[i] is '(', or ')'.

// ✅ SOLUTION (60.35% runtime, 43.95% memory):
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
    if (s.length < 2) return 0;
    const stack = [-1];
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (current === '(') stack.push(i);
        if (current === ')') {
            stack.pop();
            if (stack.length) {
                const length = i - stack[stack.length - 1];
                result = Math.max(result, length)
            } else {
                stack.push(i)
            }
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(longestValidParentheses("(()")) // 2
console.log(longestValidParentheses(")()())")) // 4
console.log(longestValidParentheses("")) // 0
console.log(longestValidParentheses("())()()((()()()))()()()()()()())))(()(())))()())()()()())(((()))))()()())()()()()())))(")) // 28
console.log(longestValidParentheses("()(()())")) // 8
console.log(longestValidParentheses("()(()")) // 2
console.log(longestValidParentheses("()")) // 2