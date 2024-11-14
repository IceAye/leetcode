const reverseWords = function(s) {
    return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
};

console.log(reverseWords("the sky is blue")) // "blue is sky the"
console.log(reverseWords("  hello world  ")) // "world hello"
console.log(reverseWords("a good   example")) // "example good a"

