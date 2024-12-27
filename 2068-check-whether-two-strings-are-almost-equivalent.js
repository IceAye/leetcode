// ❓ DESCRIPTION:
// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each
// letter from 'a' to 'z' between word1 and word2 is at most 3.
// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false
// otherwise.
// The frequency of a letter x is the number of times it occurs in the string.
//
// ✅ SOLUTION (runtime 100%):
const checkAlmostEquivalent = function (word1 , word2) {
    let map1 = new Map();
    let map2 = new Map();

    for (const char1 of word1) {
        map1.set(char1 , map1.get(char1) + 1 || 1)
    }
    for (const char2 of word2) {
        map1.get(char2) ? map1.set(char2 , map1.get(char2) - 1) : map2.set(char2 , map2.get(char2) + 1 || 1)
    }
    return [...map1.values()].every(value => value <= 3) && [...map2.values()].every(value => value <= 3)
};

// 📌 TESTCASE:
console.log(checkAlmostEquivalent("aaaa" , "bccb")); // false
console.log(checkAlmostEquivalent("abcdeef" , "abaaacc")); // true
console.log(checkAlmostEquivalent("cccddabba" , "babababab")); // true
console.log(checkAlmostEquivalent("zzzyyy" , "iiiiii")); // false