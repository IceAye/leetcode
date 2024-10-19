let findWords = function (words) {
    let result = [];
    for (const word of words) {
        let plainWord = [...new Set(word.toLowerCase())];
        if (
            plainWord.every((item) => "qwertyuiop".includes(item)) ||
            plainWord.every((item) => "asdfghjkl".includes(item)) ||
            plainWord.every((item) => "zxcvbnm".includes(item))
        )
            result.push(word);
    }
    return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf", "sfd"]));
