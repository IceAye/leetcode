// ❓ DESCRIPTION:
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.
//
// ✅ SOLUTION:

const target = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
};

const maxNumberOfBalloons = function (text) {
    let freq = new Map();
    for (const char of text) {
        if (target[char]) {
            freq.set(char, freq.get(char) + 1 || 1);
        }
    }
    if (freq.size < 5) {
        return 0;
    }
    freq.set("l", Math.floor(freq.get("l") / 2));
    freq.set("o", Math.floor(freq.get("o") / 2));
    return Math.min(...freq.values());
};

// 📌 TESTCASE:
console.log(maxNumberOfBalloons("nlaebolko")); // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(maxNumberOfBalloons("leetcode")); // 0