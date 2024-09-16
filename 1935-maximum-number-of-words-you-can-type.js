// ❓ DESCRIPTION:
// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
//
// ✅ SOLUTION:
let canBeTypedWords = function (text, brokenLetters) {
    let count = 0;
    text = text.split(" ");

    for (const word of text) {
        if (new RegExp(`[${brokenLetters}]`).test(word) === false) count++;
    }
    return count;
};

console.log(canBeTypedWords("hello world", "ad"))
console.log(canBeTypedWords("leet code", "lt"))
console.log(canBeTypedWords("leet code", "e"))