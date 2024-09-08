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
