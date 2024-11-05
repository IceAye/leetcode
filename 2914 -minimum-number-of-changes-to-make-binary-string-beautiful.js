let minChanges = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i += 2) {
        if (s[i] !== s[i + 1]) count++;
    }
    return count;
};

console.log(minChanges("1001")) // 2
console.log(minChanges("10")) // 1
console.log(minChanges("0000")) // 0
console.log(minChanges("01110011")) // 1
console.log(minChanges("11000111")) // 1