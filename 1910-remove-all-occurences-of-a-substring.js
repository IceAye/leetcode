const removeOccurrences = function (s, part) {
    while (new RegExp(`${part}`).test(s)) {
        s = s.replace(new RegExp(`${part}`), "");
    }
    return s;
};

console.log(removeOccurrences("daabcbaabcbc", "abc")) // "dab"
console.log(removeOccurrences("axxxxyyyyb", "xy")) // "ab"