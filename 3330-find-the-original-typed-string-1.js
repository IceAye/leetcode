const possibleStringCount = function(word) {
    return word.match(/(.)\1*/g).reduce((acc, curr) => acc + (curr.length - 1), 0) + 1;
};

console.log(possibleStringCount("abbcccc")) // 5
console.log(possibleStringCount("abcd")) // 1
console.log(possibleStringCount("aaaa")) // 4