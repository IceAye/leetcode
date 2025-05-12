// ❓ DESCRIPTION:
// You are given a string s consisting of lowercase English letters ('a' to 'z').
//
// Your task is to:
//
// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.
//
// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.
//
// The frequency of a letter x is the number of times it occurs in the string.
//
// ✅ SOLUTION:
const maxFreqSum = function(s) {
    function countFrequence (string) {
        let map = new Map();
        for (const char of string) {
            map.set(char, map.get(char) + 1 || 1);
        }
        return map.size ? Math.max(...map.values()) : 0
    }

    let vowels = countFrequence(s.replace(/[^euioa]/gi, ""));
    let consonants = countFrequence(s.replace(/[euioa]/gi, ""));
    return vowels + consonants;
};

// 📌 TESTCASE:
console.log(maxFreqSum("successes")) // 6
console.log(maxFreqSum("aeiaeia")) // 3
console.log(maxFreqSum("tttt")) // 4