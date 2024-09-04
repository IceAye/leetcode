// ❓ DESCRIPTION:
// You are given a string s consisting of lowercase English letters, and an integer k.
//
// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.
//
// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:
//
// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.
//
// ✅ SOLUTION:
let getLucky = function (s, k) {
    let array = [];
    for (const char of s) {
        array.push(+(char.charCodeAt(0) - 96));
    }
    let number = Array.from(array.join("").split(""), Number);
    while (k > 0) {
        if (k === 1) {
            return number.reduce((sum, current) => sum + current);
        } else {
            number = Array.from(
                number
                    .reduce((sum, current) => sum + current)
                    .toString()
                    .split(""),
                Number,
            );
            k--;
        }
    }
    return number;
};

console.log(getLucky("iiii", 1));
console.log(getLucky("leetcode", 2));
console.log(getLucky("zbax", 2));
