// ❓ DESCRIPTION:
// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
//
// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.
//
// ✅ SOLUTION:
let repeatedCharacter = function (s) {
    let set = new Set();
    for (const char of s) {
        if (set.has(char)) return char;
        set.add(char);
    }
};

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
