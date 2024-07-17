// ❓ DESCRIPTION:
// Given an array of strings words and a string s, determine if s is an acronym of words.
// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string
// in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].
// Return true if s is an acronym of words, and false otherwise.
//
// ✅ SOLUTION:
let isAcronym = function(words, s) {
    return s === words.map(item => item[0]).join('')
}

console.log(isAcronym(["alice","bob","charlie"], "abc"))
console.log(isAcronym(["an","apple"], "a"))
console.log(isAcronym(["afqcpzsx","icenu"], "yi"))
console.log(isAcronym(["a","b","c"], "abcd"))