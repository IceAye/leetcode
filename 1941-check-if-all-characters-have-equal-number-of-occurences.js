let areOccurrencesEqual = function (s) {
    let map = new Map();
    for (const char of s) {
        map.set(char, map.get(char) + 1 || 1)
    }

    return new Set(map.values()).size === 1
};

console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));
console.log(areOccurrencesEqual("aaaaa"));
console.log(areOccurrencesEqual(""));