// ❓ DESCRIPTION:
// You are given a string s. Reorder the string using the following algorithm:
//
// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
//
// Return the result string after sorting s with this algorithm.
//
// ✅ SOLUTION:
let sortString = function (s) {
    let sorted = s.split("").sort();
    let map = new Map();
    let result = "";
    let reversed = [];

    for (const char of sorted) {
        map.set(char, map.get(char) + 1 || 1);
    }

    while (map.size > 0) {
        for (let key of map.keys()) {
            if (map.get(key) > 0) result += key;
            map.set(key, map.get(key) - 1);
            if (map.get(key) === 0) map.delete(key);
        }
        for (let key of map.keys()) {
            if (map.get(key) > 0) reversed.push(key);
            map.set(key, map.get(key) - 1);
            if (map.get(key) === 0) map.delete(key);
        }
        result += reversed.toReversed().join("");
        reversed = [];
    }
    return result;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));
