// ❓ DESCRIPTION:
// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
// A substring is a contiguous sequence of characters within a string.
//
// ✅ SOLUTION:
let maxLengthBetweenEqualCharacters = function(s) {
    let result = [];
    for (const char of s) {
        result.push(s.lastIndexOf(char) - s.indexOf(char) - 1)
    }
    return Math.max(...result)
};

// 📌 TESTCASE:
console.log(maxLengthBetweenEqualCharacters("aa")) // 0
console.log(maxLengthBetweenEqualCharacters("abca")) // 2
console.log(maxLengthBetweenEqualCharacters("cbzxy")) // -1
console.log(maxLengthBetweenEqualCharacters("hohoho")) // 3
console.log(maxLengthBetweenEqualCharacters("a")) // -1
