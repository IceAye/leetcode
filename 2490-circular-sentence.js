// ❓ DESCRIPTION:
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.
// A sentence is circular if:
// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.
// Given a string sentence, return true if it is circular. Otherwise, return false.
//
// ✅ SOLUTION (runtime 100%):

let isCircularSentence = function(sentence) {
    if (sentence.at(0) !== sentence.at(-1)) return false
    let array = sentence.split(" ");
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].at(-1) !== array[i + 1].at(0)) return false;
    }
    return true;
};

// 📌 TESTCASE:
console.log(isCircularSentence("leetcode exercises sound delightful")) // true
console.log(isCircularSentence("eetcode")) // true
console.log(isCircularSentence("Leetcode is cool")) // false
console.log(isCircularSentence("ab a a")) // false