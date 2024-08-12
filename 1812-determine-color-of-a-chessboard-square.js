let squareIsWhite = function (coordinates) {
    const abc = "abcdefgh";
    const digits = "12345678";
    return (abc.indexOf(coordinates[0]) + digits.indexOf(coordinates[1])) % 2 !== 0;
};

console.log(squareIsWhite("a1"));
console.log(squareIsWhite("a2"));
console.log(squareIsWhite("h3"));
console.log(squareIsWhite("c7"));
console.log(squareIsWhite("d8"));
console.log(squareIsWhite("f5"));