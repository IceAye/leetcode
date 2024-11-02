let makeFancyString = function (s) {
    let result = s[0]
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1] && s[i] === s[i + 1]) continue
        result += s[i]
    }
    return result;
};

console.log(makeFancyString("leeetcode")); // "leetcode"
console.log(makeFancyString("aaabaaaa")); // "aabaa"
console.log(makeFancyString("aab")); // "aab"