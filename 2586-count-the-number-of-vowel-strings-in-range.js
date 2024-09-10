// ❓ DESCRIPTION:
// You are given a 0-indexed array of string words and two integers left and right.
//
// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
//
// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].
//
// ✅ SOLUTION:

let vowelStrings = function (words, left, right) {
    const vowels = ["a","e","i","o","u"];
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (vowels.includes(words[i].at(0)) && vowels.includes(words[i].at(-1)))
            count++;
    }
    return count++;
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
console.log(vowelStrings(["ce","ai"], 1, 1));