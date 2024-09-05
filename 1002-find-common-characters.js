// ❓ DESCRIPTION:
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
//
// ✅ SOLUTION 1 (hashmap):
let commonChars = function (words) {
    let result = [];
    let map = new Map();

    for (let char of words[0]) {
        map.set(char, map.get(char) + 1 || 1);
    }

    for (let word = 1; word < words.length; word++) {
        let tempMap = new Map();

        for (let char of words[word]) {
            tempMap.set(char, tempMap.get(char) + 1 || 1);
        }

        for (let key of map.keys()) {
            if (!tempMap.has(key)) {
                map.delete(key);
            } else map.set(key, Math.min(tempMap.get(key), map.get(key)));
        }
        tempMap.clear();
    }
    for (let [ key, value ] of map.entries()) {

        while (value > 0) {
            result.push(key);
            value--;
        }
    }
    return result;
};

// SOLUTION 2:
let commonChars = function (words) {
    let result = [];

    for (let letter of words[0]) {
        if (words.every((word) => word.includes(letter))) result.push(letter);
        words = words.map((word) => word.replace(letter, ""));
    }
    return result;
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
