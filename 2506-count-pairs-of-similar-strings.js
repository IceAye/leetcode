// ❓ DESCRIPTION:
// You are given a 0-indexed string array words.
// Two strings are similar if they consist of the same characters.
// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.
//
// ✅ SOLUTION:
let similarPairs = function (words) {
    let sets = words.map(item => [...new Set([...item].sort())].join(""));
    let count = 0;
    for (let i = 0; i < sets.length - 1; i++) {
        for (let j = i + 1; j < sets.length; j++) {
            if (sets[i] === sets[j]) count++;
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))
console.log(similarPairs(["aabb","ab","ba"]))
console.log(similarPairs(["nba","cba","dba"]))