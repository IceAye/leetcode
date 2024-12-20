// ❓ DESCRIPTION:
// You are given a string title consisting of one or more words separated by a single space, where each word consists
// of English letters. Capitalize the string by changing the capitalization of each word such that:  If the length of
// the word is 1 or 2 letters, change all letters to lowercase. Otherwise, change the first letter to uppercase and the
// remaining letters to lowercase. Return the capitalized title.
//
// ✅ SOLUTION:
const capitalizeTitle = function (title) {
    let words = title.split(" ");
    let result = [];

    for (const word of words) {
        word.length < 3
            ? result.push(word.toLowerCase())
            : result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }

    return result.join(" ");
};

// 📌 TESTCASE:
console.log(capitalizeTitle("capiTalIze tHe titLe")); // "Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word")); // "First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode")); // "i Love Leetcode"