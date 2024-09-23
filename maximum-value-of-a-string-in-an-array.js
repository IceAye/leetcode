let maximumValue = function (strs) {
    let result = 0;
    for (const str of strs) {
        isNaN(str) ? result = Math.max(result, str.length) : result = Math.max(result, +str);
    }
    return result;
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["1", "01", "001", "0001"]));
