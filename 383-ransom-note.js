const canConstruct = function (ransomNote, magazine) {
    let map = new Map();

    for (const el of magazine) {
        map.set(el, map.get(el) + 1 || 1);
    }

    for (const el of ransomNote) {
        if (map.get(el) === undefined) return false;
        map.set(el, map.get(el) - 1);
        if (map.get(el) < 0) return false;
    }

    return true;
};

const canConstruct = function (ransomNote, magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char, '');
    }
    return ransomNote.length === 0;
};


console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aab", "baa")); // true
