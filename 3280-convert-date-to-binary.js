// ❓ DESCRIPTION:
// You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.
// date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.
// Return the binary representation of date.
//
// ✅ SOLUTION:
const convertDateToBinary = function(date) {
    return date.split("-").map(item => (+item).toString(2)).join("-");
};

// 📌 TESTCASE:
console.log(convertDateToBinary("2080-02-29")); // "100000100000-10-11101"
console.log(convertDateToBinary("1900-01-01")); // "11101101100-1-1"

