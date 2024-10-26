// ❓ DESCRIPTION:
// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.
//
// ✅ SOLUTION (runtime 90.15%):
let countCharacters = function (words, chars) {
    let resultLength = 0;
    let globalMap = new Map();
    for (const char of chars) {
        globalMap.set(char, globalMap.get(char) + 1 || 1);
    }
    for (const word of words) {
        let map = new Map();
        [...word].map((item) => map.set(item, map.get(item) + 1 || 1));
        let isGood = true;
        for (const key of map.keys()) {
            if (!globalMap.has(key) || map.get(key) > globalMap.get(key)) {
                isGood = false;
                break;
            }
        }
        if (isGood) resultLength += word.length;
    }
    return resultLength;
};

// 📌 TESTCASE:
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // 6
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")); // 10
