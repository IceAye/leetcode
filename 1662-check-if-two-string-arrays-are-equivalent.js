let arrayStringsAreEqual = function (word1, word2) {
    return word1.join('') === word2.join('')
}
console.log('Output: ' ,arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
console.log('Output: ' ,arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))
console.log('Output: ' ,arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))