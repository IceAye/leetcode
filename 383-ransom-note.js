// ❓ DESCRIPTION:
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from
// magazine and false otherwise.  Each letter in magazine can only be used once in ransomNote.
//
// ✅ SOLUTION 1:
const canConstruct = function (ransomNote , magazine) {
    let map = new Map();

    for (const el of magazine) {
        map.set(el , map.get(el) + 1 || 1);
    }

    for (const el of ransomNote) {
        if (map.get(el) === undefined) return false;
        map.set(el , map.get(el) - 1);
        if (map.get(el) < 0) return false;
    }

    return true;
};

// ✅ SOLUTION 2:
const canConstruct = function (ransomNote , magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char , '');
    }
    return ransomNote.length === 0;
};

// 📌 TESTCASE:
console.log(canConstruct("a" , "b")); // false
console.log(canConstruct("aa" , "ab")); // false
console.log(canConstruct("aa" , "aab")); // true
console.log(canConstruct("aab" , "baa")); // true
