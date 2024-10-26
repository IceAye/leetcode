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

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // 6
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")); // 10
