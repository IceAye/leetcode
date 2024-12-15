// ❓ DESCRIPTION:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// ✅ SOLUTION:
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();
    for (const c of s) {
        map.set(c, map.get(c) + 1 || 1);
    }
    for (const c of t) {
        if (map.has(c) && map.get(c) > 0) {
            map.set(c, map.get(c) - 1);
        } else {
            return false;
        }
    }
    return true;
};

// 📌 TESTCASE:
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false