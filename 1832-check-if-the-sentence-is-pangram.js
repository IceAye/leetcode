// ❓ DESCRIPTION:
// Given a string sentence containing only lowercase English letters,
// return true if sentence is a pangram, or false otherwise.
// sentence consists of lowercase English letters.
//
// ✅ SOLUTION:
let checkIfPangram = function ( sentence ) {
    return new Set(sentence).size === 26
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))