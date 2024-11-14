// ❓ DESCRIPTION:
// Given a string s, reverse the order of characters in each word within a sentence
// while still preserving whitespace and initial word order.
//
// ✅ SOLUTION:
let reverseWords = function (s) {
    return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))