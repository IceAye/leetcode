let uniqueOccurrences = function (arr) {
    let map = new Map();

    for (const item of arr) {
        map.set(item, map.get(item) + 1 || 1);
    }

    return map.size === new Set(map.values()).size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
