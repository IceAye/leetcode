// ❓ DESCRIPTION:
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.
//
// ✅ SOLUTION (runtime 100%, memory 73.20%)

const isPrefixOfWord = function(sentence, searchWord) {
    return sentence.split(' ').findIndex(word => word.match(new RegExp(`^${searchWord}`))) + 1 || -1
};

// 📌 TESTCASE:
console.log(isPrefixOfWord("i love eating burger", "burg")) // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")) // 2
console.log(isPrefixOfWord("i am tired", "you")) // -1
console.log(isPrefixOfWord("i love eating broadburgers", 'burg')) // -1
