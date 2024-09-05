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

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
