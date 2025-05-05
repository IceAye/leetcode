// ❓ DESCRIPTION:
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
//
// ✅ SOLUTION:

const countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);

    return words.reduce((acc, word) => {
        for (const char of word) {
            if (!allowedSet.has(char)) {
                return acc;
            }
        }
        return acc + 1;
    }, 0);
};

// 📌 TESTCASE:
console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"])) // 2
console.log(countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"])) // 7
console.log(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"])) // 4