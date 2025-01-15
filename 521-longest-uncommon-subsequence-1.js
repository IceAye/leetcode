const findLUSlength = function(a, b) {
    return a === b ? - 1 : Math.max(a.length, b.length);
};

console.log(findLUSlength("aba","cdc")) // 3
console.log(findLUSlength("aaa","bbb")) // 3
console.log(findLUSlength("aaa","aaa")) // -1