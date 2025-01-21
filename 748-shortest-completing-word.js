// ❓ DESCRIPTION:
// Given a string licensePlate and an array of strings words, find the shortest completing word in words.
// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.
//
// ✅ SOLUTION:
function frequencyCounting(string) {
    let map = new Map();

    for (const char of string) {
        map.set(char, map.get(char) + 1 || 1);
    }
    return map;
}

const shortestCompletingWord = function (licensePlate, words) {
    let minLength = +Infinity;
    let result = "";

    let initial = licensePlate.toLowerCase().replace(/[\d\s]/gi, "");
    let initialFrequency = frequencyCounting(initial);

    for (const word of words) {
        let wordFrequency = frequencyCounting(word);

        if ([...initialFrequency.entries()].every(([key, value]) => wordFrequency.has(key) && wordFrequency.get(key) >= value)) {
            if (minLength > word.length) {
                minLength = word.length;
                result = word;
            }
        }
    }

    return result;
};

// 📌 TESTCASE:
console.log(
    shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]),
); // "steps"
console.log(
    shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]),
); // "pest"

console.log(
    shortestCompletingWord("Ah71752", ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]),
); // "husband"