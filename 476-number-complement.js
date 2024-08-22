let findComplement = function (num) {
    return parseInt(num.toString(2).replace(/./g, c => c === "1" ? "0" : "1"), 2);
};

console.log(findComplement(5));
console.log(findComplement(1));