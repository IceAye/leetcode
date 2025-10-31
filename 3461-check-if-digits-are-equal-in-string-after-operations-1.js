// ❓ DESCRIPTION:
// You are given a string s consisting of digits. Perform the following operation repeatedly until the string has exactly two digits:
// For each pair of consecutive digits in s, starting from the first digit, calculate a new digit as the sum of the two digits modulo 10.
// Replace s with the sequence of newly calculated digits, maintaining the order in which they are computed.
// Return true if the final two digits in s are the same; otherwise, return false.

// ❗ CONSTRAINTS:
// 3 <= s.length <= 100
// s consists of only digits.

// ✅ SOLUTION:
/**
 * @param {string} s
 * @return {boolean}
 */
const hasSameDigits = function(s) {
  let array = [...s];
  while (array.length > 2) {
    array = array.reduce((acc , curr , ind) => {
      if (ind === 0) return acc;
      acc.push((+curr + +array[ind - 1]) % 10);
      return acc;
    } , []);
  }
  return array[0] === array[1];
};

// 📌 TESTCASE:
console.log(hasSameDigits('3902')); // true
console.log(hasSameDigits('34789')); // false