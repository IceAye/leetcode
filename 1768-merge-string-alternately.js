// ❓ DESCRIPTION:
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
//
// ✅ SOLUTION:
let mergeAlternately = function (word1, word2) {
    let string = "";
    let maxLength = Math.max(word1.length, word2.length)
    for (let i = 0; i < maxLength; i++) {
        string += word1.charAt(i) + word2.charAt(i);
    }
return string
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
console.log(mergeAlternately("cf", "eee"));