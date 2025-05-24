// ❓ DESCRIPTION:
// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
//
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
//
// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
//
// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
//
// ✅ SOLUTION 1 (20.3% runtime, 96.31% memory):
const removeOuterParentheses = function (s) {
    const parentheses = {
        '(': 1,
        ')': -1,
    }
    let result = '';
    let count = 0;

    for (const char of s) {
        if (count === 0) {
            count += parentheses[char]
        } else if (count >= 1) {
            count += parentheses[char];
            if (count !== 0) {
                result += char;
            }
        }
    }
    return result;
};

// ✅ SOLUTION 1 (61.41% runtime, 92.79% memory):
const removeOuterParentheses = function(s) {
    let result = '';
    let count = 0;

    for (const char of s) {
        if (char === '(') {
            count++;
        }
        if (count > 1) {
            result += char;
        }
        if (char === ')') {
            count--;
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(removeOuterParentheses('(()())(())')) // '()()()'
console.log(removeOuterParentheses('(()())(())(()(()))')) // '()()()()(())'
console.log(removeOuterParentheses('()()')) // ''