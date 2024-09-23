let countPrefixes = function (words, s) {
    let count = 0;
    words.map(item => s.startsWith(item) ? count++ : count);
    return count;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
console.log(countPrefixes(["a", "a"], "aa"));
