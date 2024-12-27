const checkAlmostEquivalent = function (word1, word2) {
    let map1 = new Map();
    let map2 = new Map();

    for (const char1 of word1) {
        map1.set(char1, map1.get(char1) + 1 || 1)
    }
    for (const char2 of word2) {
        map1.get(char2) ? map1.set(char2, map1.get(char2) - 1) : map2.set(char2, map2.get(char2) + 1 || 1)
    }
    return [...map1.values()].every(value => value <= 3) &&  [...map2.values()].every(value => value <= 3)
};

console.log(checkAlmostEquivalent("aaaa", "bccb")); // false
console.log(checkAlmostEquivalent("abcdeef", "abaaacc")); // true
console.log(checkAlmostEquivalent("cccddabba", "babababab")); // true
console.log(checkAlmostEquivalent("zzzyyy", "iiiiii")); // false