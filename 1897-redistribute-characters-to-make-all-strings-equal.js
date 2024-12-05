// ❓ DESCRIPTION:
// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
// Return true if you can make every string in words equal using any number of operations, and false otherwise.
//
// ✅ SOLUTION:
const makeEqual = function (words) {
    let map = new Map();
    [...words.join("")].map((item) => map.set(item, map.get(item) + 1 || 1));
    return [...map.values()].every((item) => item % words.length === 0);
};

// 📌 TESTCASE:
console.log(makeEqual(["abc", "aabc", "bc"])); // true
console.log(makeEqual(["ab", "a"])); // false
