const isSubstringPresent = function (s) {
    for (let i = 1; i < s.length; i++) {
        let str = `${s[i]}${s[i - 1]}`;
        if (s.includes(str)) return true;
    }
    return false;
};

console.log(isSubstringPresent("leetcode")); // true
console.log(isSubstringPresent("abcba")); // true
console.log(isSubstringPresent("abcd")); // false