// ❓ DESCRIPTION:
// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.
// An English letter b is greater than another letter a if b appears after a in the English alphabet.
//
// ✅ SOLUTION:
let greatestLetter = function(s) {
    let frequency = new Map();
    [...new Set(s)].map(item => frequency.set(item.toUpperCase(), frequency.get(item.toUpperCase()) + 1 || 1));
    return [...frequency.entries()].reduce((acc, curr) => curr[0] > acc && curr[1] === 2 ? curr[0] : acc, "");
};

// 📌 TESTCASE:
console.log(greatestLetter("lEeTcOdE")) // "E"
console.log(greatestLetter("arRAzFif")) // "R"
console.log(greatestLetter("AbCdEfGhIjK")) // ""