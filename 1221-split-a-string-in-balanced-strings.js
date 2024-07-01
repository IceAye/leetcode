/*
❓ DESCRIPTION:
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it into some number of substrings such that:
    Each substring is balanced.
    Return the maximum number of balanced strings you can obtain.

📌 EXAMPLES:
Input: s = "RLRRLLRLRL" Output: 4
Input: s = "RLRRRLLRLL" Output: 2
Input: s = "LLLLRRRR" Output: 1

✅ SOLUTION:    */

let balancedStringSplit = function ( s ) {
    let result = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            balance += 1;
        } else {
            balance -= 1;
        }
        if (balance === 0) {
            result += 1;
        }
    }
    return result;
};

console.log('Output: ', balancedStringSplit("RLRRLLRLRL"))
