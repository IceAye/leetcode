// ❓ DESCRIPTION:
// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.
//
// ✅ SOLUTION:
const maxDepth = function(s) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(s[i])
        if (s[i] === ')') {
            count = Math.max(count, stack.length);
            stack.pop();
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(maxDepth( "(1+(2*3)+((8)/4))+1")) // 3
console.log(maxDepth("(1)+((2))+(((3)))")) // 3
console.log(maxDepth("()(())((()()))")) // 3