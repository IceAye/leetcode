// ❓ DESCRIPTION:
// Given a string s, you have two types of operation:
//
// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if exists).
// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the right of i (if exists).
// Your task is to minimize the length of s by performing the above operations zero or more times.
//
// Return an integer denoting the length of the minimized string.
//
// ✅ SOLUTION:
// Since the minimized string will not contain duplicate characters but will contain all distinct characters of the original string, we use Set.
let minimizedStringLength = function (s) {
    return new Set(s).size;
};

console.log(minimizedStringLength("aaabc"));
console.log(minimizedStringLength("cbbd"));
console.log(minimizedStringLength("baadccab"));
