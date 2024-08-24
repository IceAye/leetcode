let removePalindromeSub = function (s) {
    let stringReversed = s.split("").reverse().join("");
    if (stringReversed === s) return 1;
    return 2;
};

console.log(removePalindromeSub("ababa"));
console.log(removePalindromeSub("abb"));
console.log(removePalindromeSub("baabb"));
