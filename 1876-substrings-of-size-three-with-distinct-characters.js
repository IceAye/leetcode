// SOLUTION 1:
let countGoodSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        if (s[i] !== s[i + 1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2] ) count++;
    }
    return count;
};

// SOLUTION 2 (set):
let countGoodSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let word = [s[i], s[i + 1], s[i + 2]];
        let set = new Set(word);
        if (set.size === 3) count++;
    }
    return count;
};

console.log(countGoodSubstrings("xyzzaz"));
console.log(countGoodSubstrings("aababcabc"));
