// ❓ DESCRIPTION:
// The value of an alphanumeric string can be defined as:
// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.
//
// ✅ SOLUTION:
let maximumValue = function (strs) {
    let result = 0;
    for (const str of strs) {
        isNaN(str) ? result = Math.max(result, str.length) : result = Math.max(result, +str);
    }
    return result;
};

// 📌 TESTCASE:
console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["1", "01", "001", "0001"]));
