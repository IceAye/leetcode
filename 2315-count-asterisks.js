// ❓ DESCRIPTION:
// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.
//
// Return the number of '*' in s, excluding the '*' between each pair of '|'.
//
// Note that each '|' will belong to exactly one pair.
//
// ✅ SOLUTION (100% runtime, 80% memory):
const countAsterisks = function (s) {
    return s.split("|").reduce((acc, curr, ind) => {
        if (ind % 2 === 0) {
            acc += (curr.match(/\*/g) || "").length;
        }
        return acc;
    }, 0);
};

// 📌 TESTCASE:
console.log(countAsterisks("l|*e*et|c**o|*de|")) // 2
console.log(countAsterisks("iamprogrammer")) // 0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")) // 5