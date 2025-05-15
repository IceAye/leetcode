const getLongestSubsequence = function (words, groups) {
    let result = [words[0]];
    for (let i = 1; i < groups.length; i++) {
        if (groups[i] !== groups[i - 1]) result.push(words[i]);
    }
    return result;
};

console.log(getLongestSubsequence(["e","a","b"], [0,0,1])) // ["e","b"]
console.log(getLongestSubsequence(["a","b","c","d"], [1,0,1,1])) // ["a","b","c"]