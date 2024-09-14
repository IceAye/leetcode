let repeatedCharacter = function (s) {
    let set = new Set();
    for (const char of s) {
        if (set.has(char)) return char;
        set.add(char);
    }
};

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
