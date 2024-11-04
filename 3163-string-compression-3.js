// ❓ DESCRIPTION:
// Given a string word, compress it using the following algorithm:
//
// Begin with an empty string comp. While word is not empty, use the following operation:
// Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
// Append the length of the prefix followed by c to comp.
// Return the string comp.
//
// ✅ SOLUTION:
let compressedString = function(word) {
    let comp = "";
    let count = 1;
    for (let i = 0; i < word.length; i++) {
        if (count === 9) {
            comp += count + word[i];
            count = 0;
        }
        if (word[i] !== word[i + 1] && count !== 0) {
            comp += count + word[i];
            count = 1;
        } else count++;
    }
    return comp;
};

// 📌 TESTCASE:
console.log(compressedString("abcde")) // "1a1b1c1d1e"
console.log(compressedString("aaaaaaaaaaaaaabb")) // "9a5a2b"
console.log(compressedString("aa")) // "2a"
console.log(compressedString("a")) // "1a"
console.log(compressedString("aaaaaaaaay")) // "9a1y"