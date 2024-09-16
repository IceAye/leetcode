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