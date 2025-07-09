// ❓ DESCRIPTION:
// You are given a binary string s that contains at least one '1'.
//
// You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
//
// Return a string representing the maximum odd binary number that can be created from the given combination.
//
// Note that the resulting string can have leading zeros.

// ✅ SOLUTION:
const maximumOddBinaryNumber = function(s) {
    const onesLength = s.match(/1/g).length;
    return '1'.repeat(onesLength - 1) + '0'.repeat(s.length - onesLength) + '1';
};

// 📌 TESTCASE:
console.log(maximumOddBinaryNumber("010")) // "001"
console.log(maximumOddBinaryNumber("0101")) // "1001"