// ❓ DESCRIPTION:
// Given a string s, find any substring of length 2 which is also present in the reverse of s.
// Return true if such a substring exists, and false otherwise.
//
// ✅ SOLUTION:
const isSubstringPresent = function (s) {
    for (let i = 1; i < s.length; i++) {
        let str = `${s[i]}${s[i - 1]}`;
        if (s.includes(str)) return true;
    }
    return false;
};

// 📌 TESTCASE:
console.log(isSubstringPresent("leetcode")); // true
console.log(isSubstringPresent("abcba")); // true
console.log(isSubstringPresent("abcd")); // false