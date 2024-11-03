let rotateString = function (s, goal) {
    for (let i = 0; i < s.length; i++) {
        let startIndex;
        if (s[i] === goal[0]) startIndex = i;
        if (s.slice(startIndex) + s.slice(0, startIndex) === goal) return true;
    }
    return false;
};

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
console.log(rotateString("dvadererrerdvaddf", "rerdvaddfdvaderer")); // true
console.log(rotateString("abcdebcdefin", "abcdebcdefin")); // true
console.log(rotateString("bbbacddceeb", "ceebbbbacdd")); // true
