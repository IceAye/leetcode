const titleToNumber = function (columnTitle) {
    let count = 0;
    for (const char of columnTitle) {
        count = count * 26 + (char.charCodeAt(0) - "A".charCodeAt(0) + 1);
    }
    return count;
};

console.log(titleToNumber("A")) // 1
console.log(titleToNumber("AB")) // 28
console.log(titleToNumber("ZY")) // 701