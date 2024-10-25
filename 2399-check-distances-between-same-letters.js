// ❓ DESCRIPTION:
// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.
// Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).
// In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.
// Return true if s is a well-spaced string, otherwise return false.
//
// ✅ SOLUTION (runtime 97.73%):
let checkDistances = function(s, distance) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    for (const letter of s) {
        if (s.lastIndexOf(letter) - s.indexOf(letter) - 1 !== distance[abc.indexOf(letter)]) return false;
    }
    return true;
};

// 📌 TESTCASE:
console.log(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) // true
console.log(checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) // false