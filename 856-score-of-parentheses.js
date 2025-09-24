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

console.log(scoreOfParentheses("()")) // 1
console.log(scoreOfParentheses("(())")) // 2
console.log(scoreOfParentheses("()()")) // 2
console.log(scoreOfParentheses("(()(()))")) // 6