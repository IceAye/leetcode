// ❓ DESCRIPTION:
// Given an integer x, return true if x is a palindrome, and false otherwise.
//
// ✅ SOLUTION:
const isPalindrome = function (x) {
    if (x < 0) return false;
    return +Array.from(x.toString()).reverse().join("") === x;
};

// 📌 TESTCASE:
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false