let checkString = function (s) {
    let indexOfFirstB = s.indexOf("b");
    return indexOfFirstB === -1 || !s.slice(indexOfFirstB).includes("a");
};

console.log(checkString("aaabbb"));
console.log(checkString("abab"));
console.log(checkString("bbb"));
console.log(checkString("a"));