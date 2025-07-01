// ❓ DESCRIPTION:
// Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.
//
// Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.
//
// You are given a string word, which represents the final output displayed on Alice's screen.
//
// Return the total number of possible original strings that Alice might have intended to type.
// 📅 (daily question 2025 July, 1st)
//
// ✅ SOLUTION:
const possibleStringCount = function(word) {
    return word.match(/(.)\1*/g).reduce((acc, curr) => acc + (curr.length - 1), 0) + 1;
};

// 📌 TESTCASE:
console.log(possibleStringCount("abbcccc")) // 5
console.log(possibleStringCount("abcd")) // 1
console.log(possibleStringCount("aaaa")) // 4