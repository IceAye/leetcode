// ❓ DESCRIPTION:
// You are given a string s consisting of digits and an integer k.
// A round can be completed if the length of s is greater than k. In one round, do the following:
// Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
// Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
// Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.
// Return s after all rounds have been completed.
//
// ✅ SOLUTION (runtime  100%):
const digitSum = function (s, k) {
    if (s.length <= k) return s;
    s = s
        .replace(new RegExp(`(.){${k}}`, 'g' ), '$&,')
        .split(",")
        .map((item) => item === '' ? null : [...item].reduce((acc, curr) => acc + +curr, 0))
        .join("");
    return digitSum(s, k)
};

// 📌 TESTCASE:
console.log(digitSum("11111222223", 3)) // 135
console.log(digitSum("00000000", 3)) // "000"
console.log(digitSum("1234", 2)) // "37"