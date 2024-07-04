// ❓ DESCRIPTION:
// Given two string arrays word1 and word2, return true if the two arrays represent the same string,
// and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.
//
// 📌 EXAMPLES:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"] --> Output: true
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"] --> Output: false
// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"] --> Output: true
//
// ✅ SOLUTION:

let arrayStringsAreEqual = function (word1, word2) {
    return word1.join('') === word2.join('')
}
console.log('Output: ' ,arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
console.log('Output: ' ,arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))
console.log('Output: ' ,arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))