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

console.log(capitalizeTitle("capiTalIze tHe titLe")); // "Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word")); // "First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode")); // "i Love Leetcode"