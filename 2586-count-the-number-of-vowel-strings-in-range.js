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