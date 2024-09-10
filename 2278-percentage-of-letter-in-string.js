// ❓ DESCRIPTION:
// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.
//
// ✅ SOLUTION:
let percentageLetter = function (s, letter) {
    let count = 0;
    for (const char of s) {
        if (char === letter) count++;
    }
    return Math.floor((count / s.length) * 100);
};

console.log(percentageLetter("foobar", "o"));
console.log(percentageLetter("jjjj", "k"));
console.log(percentageLetter("sgawtb", "s"));