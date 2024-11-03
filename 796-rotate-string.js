// ❓ DESCRIPTION:
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.
//
// ✅ SOLUTION (runtime 100%):
let rotateString = function (s, goal) {
    for (let i = 0; i < s.length; i++) {
        let startIndex;
        if (s[i] === goal[0]) startIndex = i;
        if (s.slice(startIndex) + s.slice(0, startIndex) === goal) return true;
    }
    return false;
};

// 📌 TESTCASE:
console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
console.log(rotateString("dvadererrerdvaddf", "rerdvaddfdvaderer")); // true
console.log(rotateString("abcdebcdefin", "abcdebcdefin")); // true
console.log(rotateString("bbbacddceeb", "ceebbbbacdd")); // true
