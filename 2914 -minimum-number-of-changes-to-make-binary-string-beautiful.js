// ❓ DESCRIPTION:
// You are given a 0-indexed binary string s having an even length.
// A string is beautiful if it's possible to partition it into one or more substrings such that:
// Each substring has an even length.
// Each substring contains only 1's or only 0's.
// You can change any character in s to 0 or 1.
// Return the minimum number of changes required to make the string s beautiful.
//
// ✅ SOLUTION (runtime 100%):
let minChanges = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i += 2) {
        if (s[i] !== s[i + 1]) count++;
    }
    return count;
};

// 📌 TESTCASE:
console.log(minChanges("1001")) // 2
console.log(minChanges("10")) // 1
console.log(minChanges("0000")) // 0
console.log(minChanges("01110011")) // 1
console.log(minChanges("11000111")) // 1