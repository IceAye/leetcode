// ❓ DESCRIPTION:
// You are given a string word containing distinct lowercase English letters.
// Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ["a","b","c"], we need to push the key one time to type "a", two times to type "b", and three times to type "c" .
// It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.
// Return the minimum number of pushes needed to type word after remapping the keys.
// An example mapping of letters to keys on a telephone keypad is given below. Note that 1, *, #, and 0 do not map to any letters.
//
// ✅ SOLUTION:
const minimumPushes = function(word) {
    let hashMap = new Map();
    for (const char of word) {
        hashMap.set(char, hashMap.get(char) + 1 || 1);
    }

    let sorted = [...hashMap.keys()].sort((a, b) => hashMap.get(b) - hashMap.get(a));

    let remap = [];
    for (let i = 0; i < sorted.length; i += 8) {
        remap.push(sorted.slice(i, i + 8));
    }
    let sumOfPushes = 0;

    for (let i = 0; i < remap.length; i++) {
        sumOfPushes += remap[i].reduce((acc, item) => acc + (i + 1) * hashMap.get(item), 0);
    }
    return sumOfPushes;
};

// 📌 TESTCASE:
console.log(minimumPushes("abcde")) // 5
console.log(minimumPushes("xycdefghij")) // 12