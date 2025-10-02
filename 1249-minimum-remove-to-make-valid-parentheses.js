// ❓ DESCRIPTION:
// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// ❗ CONSTRAINTS:
// 1 <= s.length <= 10^5
// s[i] is either '(' , ')', or lowercase English letter.


/**
 * @param {string} s
 * @return {string}
 */

// ✅ SOLUTION 1 (6.36% runtime, 14.97% memory):
const minRemoveToMakeValid = function(s) {
    let array = [...s];
    const stack = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '(') {
            stack.push(i)
        } else if (array[i] === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                array[i] = i;
            }
        }
    }
    return array.filter((item, index) => typeof item !== 'number' && !stack.includes(index)).join('');
};

// ✅ SOLUTION 2 (45.48% runtime, 67.94% memory):
const minRemoveToMakeValid = function(s) {
    const toRemove = new Set();
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                toRemove.add(i);
            }
        }
    }

    for (const item of stack) toRemove.add(item);

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!toRemove.has(i)) result += s[i];
    }

    return result;
};

// 📌 TESTCASE:
console.log(minRemoveToMakeValid("lee(t(c)o)de)")) // "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")) // "ab(c)d"
console.log(minRemoveToMakeValid("))((")) // ""