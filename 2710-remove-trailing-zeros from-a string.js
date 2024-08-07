// ❓ DEDSCRIPTION:
// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.
//
// ✅ SOLUTION:
let removeTrailingZeros = function (num) {
    return num.replace(/0+$/g, "");
};

console.log(removeTrailingZeros("51230100"));
console.log(removeTrailingZeros("512301000000"));
console.log(removeTrailingZeros("123"));