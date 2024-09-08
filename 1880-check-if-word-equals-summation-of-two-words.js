// ❓ DESCRIPTION:
// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).
//
// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.
//
// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.
//
// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.
//
// ✅ SOLUTION:

let isSumEqual = function (firstWord, secondWord, targetWord) {
    let number = function (string) {
        let digit = "";
        for (let i = 0; i < string.length; i++) {
            digit += string.charCodeAt(i) - 97;
        }
        return +digit;
    };
    return number(targetWord) === number(firstWord) + number(secondWord);
};

console.log(isSumEqual("acb", "cba", "cdb"));
console.log(isSumEqual("aaa", "a", "aab"));
console.log(isSumEqual("aaa", "a", "aaaa"));
