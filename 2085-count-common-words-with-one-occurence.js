let countWords = function (words1, words2) {
    let count = 0;
    for (const word of words1) {
        if (
            words1.indexOf(word) === words1.lastIndexOf(word) &&
            words2.indexOf(word) === words2.lastIndexOf(word) &&
            words2.indexOf(word) !== -1
        )
            count++;
    }
    return count;
};

console.log(
    countWords(
        ["leetcode", "is", "amazing", "as", "is"],
        ["amazing", "leetcode", "is"],
    ),
);
console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"]));
console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"]));
