// ❓ DESCRIPTION:
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each of the words consists of only uppercase and lowercase English letters (no punctuation).
// You want to truncate sentences such that it contains only the first k words.
//
// 📌 EXAMPLES:
// Input: s = "Hello how are you Contestant", k = 4 --> Output: "Hello how are you"
// Input: s = "What is the solution to this problem", k = 4 --> Output: "What is the solution"
// Input: s = "chopper is not a tanuki", k = 5 --> Output: "chopper is not a tanuki"
//
// ✅ SOLUTION:
let truncateSentence = function ( s , k ) {
    return s.split(' ').slice(0 , k).join(' ')
}

console.log('Output: ' ,truncateSentence("Hello how are you Contestant", 4))
console.log('Output: ' ,truncateSentence("What is the solution to this problem", 4))
console.log('Output: ' ,truncateSentence("chopper is not a tanuki", 5))