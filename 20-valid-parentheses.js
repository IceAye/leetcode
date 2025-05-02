// ❓ DESCRIPTION:
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
// ✅ SOLUTION:

const isValid = function(s) {
    let stack = [s.at(-1)];
    for (let i = s.length - 2; i >= 0; i--) {
        let curr = s[i]
        if ((stack.at(-1) === ')' && curr === '(') || (stack.at(-1) === ']' && curr === '[') || (stack.at(-1) === '}' && curr === '{')) {
            stack.pop();
        } else stack.push(curr);
    }
    return stack.length === 0;
};

// 📌 TESTCASE:
console.log(isValid('()')) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([])")) // true
console.log(isValid("([)]")) // false