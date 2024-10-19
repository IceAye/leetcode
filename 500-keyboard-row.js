// ❓ DESCRIPTION:
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf", "sfd"]));
