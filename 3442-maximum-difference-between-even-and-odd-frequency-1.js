const maxDifference = function(s) {
    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, freqMap.get(char) + 1 || 1);
    }

    const maxOdd = Math.max(...[...freqMap.values()].filter(num => num % 2 === 1), 0);
    const maxEven = Math.min(...[...freqMap.values()].filter(num => num % 2 === 0), +Infinity);

    return maxOdd - maxEven;
};

console.log(maxDifference("aaaaabbc")) // 3
console.log(maxDifference("abcabcab")) // 1
console.log(maxDifference("mmsmsym")) // -1