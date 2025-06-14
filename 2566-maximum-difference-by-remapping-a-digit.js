// ❓ DESCRIPTION:
// You are given an integer num. You know that Bob will sneakily remap one of the 10 possible digits (0 to 9) to another digit.
// Return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num.
//
// Notes:
// When Bob remaps a digit d1 to another digit d2, Bob replaces all occurrences of d1 in num with d2.
// Bob can remap a digit to itself, in which case num does not change.
// Bob can remap different digits for obtaining minimum and maximum values respectively.
// The resulting number after remapping can contain leading zeroes.
// 📅 (daily question 2025, June 14th):
//
// ✅ SOLUTION (100% runtime):
const minMaxDifference = function (num) {
    let array = [...num.toString()];
    let indMax = array.findIndex((el) => el !== "9");
    let indMin = array.findIndex((el) => el !== "0");
    let max = num.toString().replaceAll(array[indMax], "9");
    let min = num.toString().replaceAll(array[indMin], "0");
    return max - min;
};

// 📌 TESTCASE:
console.log(minMaxDifference(11891)); // 99009
console.log(minMaxDifference(90)); // 99