// ❓ DESCRIPTION:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// ✅ SOLUTION (100% runtime):
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    return  s.trim().split(' ', ).at(-1).length;
};

// 📌 TESTCASE:
console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6