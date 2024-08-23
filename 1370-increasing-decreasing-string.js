let sortString = function (s) {
    let sorted = s.split("").sort();
    let map = new Map();
    let result = "";
    let reversed = [];

    for (const char of sorted) {
        map.set(char, map.get(char) + 1 || 1);
    }

    while (map.size > 0) {
        for (let key of map.keys()) {
            if (map.get(key) > 0) result += key;
            map.set(key, map.get(key) - 1);
            if (map.get(key) === 0) map.delete(key);
        }
        for (let key of map.keys()) {
            if (map.get(key) > 0) reversed.push(key);
            map.set(key, map.get(key) - 1);
            if (map.get(key) === 0) map.delete(key);
        }
        result += reversed.toReversed().join("");
        reversed = [];
    }
    return result;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));
