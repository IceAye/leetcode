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

console.log(longestValidParentheses("(()")) // 2
console.log(longestValidParentheses(")()())")) // 4
console.log(longestValidParentheses("")) // 0
console.log(longestValidParentheses("())()()((()()()))()()()()()()())))(()(())))()())()()()())(((()))))()()())()()()()())))(")) // 28
console.log(longestValidParentheses("()(()())")) // 8
console.log(longestValidParentheses("()(()")) // 2
console.log(longestValidParentheses("()")) // 2