// ❓ DESCRIPTION:
// A fancy string is a string where no three consecutive characters are equal.
// Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion. It can be shown that the answer will always be unique.
//
// ✅ SOLUTION:

let makeFancyString = function (s) {
    let result = s[0]
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1] && s[i] === s[i + 1]) continue
        result += s[i]
    }
    return result;
};

// 📌 TESTCASE:
console.log(makeFancyString("leeetcode")); // "leetcode"
console.log(makeFancyString("aaabaaaa")); // "aabaa"
console.log(makeFancyString("aab")); // "aab"