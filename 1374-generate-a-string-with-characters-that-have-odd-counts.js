// ❓ DESCRIPTION:
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
//
// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.
//
// 📌 EXAMPLES:
// Input: n = 4 --> Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once.
// Note that there are many other valid strings such as "ohhh" and "love".
//
// Input: n = 2 --> Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once.
// Note that there are many other valid strings such as "ag" and "ur".
//
// Input: n = 7 --> Output: "holasss"
//
// 😉 HINT:
// If n is odd, return a string of size n formed only by 'a', else return string formed with n-1 'a' and 1 'b''.
//
// ✅ SOLUTION:
let generateTheString = function (n) {
    return n % 2 === 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));
