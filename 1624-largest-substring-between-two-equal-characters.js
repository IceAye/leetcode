let maxLengthBetweenEqualCharacters = function(s) {
    let result = [];
    for (const char of s) {
        result.push(s.lastIndexOf(char) - s.indexOf(char) - 1)
    }
    return Math.max(...result)
};

console.log(maxLengthBetweenEqualCharacters("aa")) // 0
console.log(maxLengthBetweenEqualCharacters("abca")) // 2
console.log(maxLengthBetweenEqualCharacters("cbzxy")) // -1
console.log(maxLengthBetweenEqualCharacters("hohoho")) // 3
console.log(maxLengthBetweenEqualCharacters("a")) // -1
