const minimumDeletions = function (word, k) {
    const map = new Map();
    for (const char of word) {
        map.set(char, map.get(char) + 1 || 1);
    }
    const values = [...map.values()];

    let result = +Infinity;

    for (let x = 0; x < values.length; x++) {
        let count = 0;
        for (let y = 0; y < values.length; y++) {
            if (y !== x) {
                if (values[y] < values[x]) count += values[y];
                if (values[y] > values[x] + k) count += values[y] - values[x] - k;
            }
        }
        result = Math.min(result, count);
    }

    return result;
};

console.log(minimumDeletions("aabcaba", 0)) // 3
console.log(minimumDeletions("dabdcbdcdcd", 2)) // 2
console.log(minimumDeletions("aaabaaa", 2)) // 1