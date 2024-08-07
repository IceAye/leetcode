let removeTrailingZeros = function (num) {
    return num.replace(/0+$/g, "");
};

console.log(removeTrailingZeros("51230100"));
console.log(removeTrailingZeros("512301000000"));
console.log(removeTrailingZeros("123"));