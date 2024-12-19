// ❓ DESCRIPTION:
// You are given a 0-indexed string array words.
// Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:
// isPrefixAndSuffix(str1, str2) returns true if str1 is both a prefix  and a  suffix  of str2, and false otherwise.
// For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but
// isPrefixAndSuffix("abc", "abcd") is false.  Return an integer denoting the number of index pairs (i, j) such that i
// < j, and isPrefixAndSuffix(words[i], words[j]) is true.
//
// ✅ SOLUTION (runtime 97.14%, memory 93.33%):

const countPrefixSuffixPairs = function (words) {
    let count = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) count++;
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(countPrefixSuffixPairs(["a" , "aba" , "ababa" , "aa"])) // 4
console.log(countPrefixSuffixPairs(["pa" , "papa" , "ma" , "mama"])) // 2
console.log(countPrefixSuffixPairs(["abab" , "ab"])) // 0