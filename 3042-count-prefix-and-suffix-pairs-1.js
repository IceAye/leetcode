const countPrefixSuffixPairs = function(words) {
    let count = 0;
    for (let i = 0; i <words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) count++;
        }
    }
    return count;
};


console.log(countPrefixSuffixPairs(["a","aba","ababa","aa"])) // 4
console.log(countPrefixSuffixPairs(["pa","papa","ma","mama"])) // 2
console.log(countPrefixSuffixPairs(["abab","ab"])) // 0