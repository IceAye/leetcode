let checkTwoChessboards = function(coordinate1, coordinate2) {
    const chess = "0abcdefgh";
    return (chess.indexOf(coordinate1[0]) + +coordinate1[1]) % 2 === (chess.indexOf(coordinate2[0]) + +coordinate2[1]) % 2;
};


console.log(checkTwoChessboards("a1", "c3")) // true
console.log(checkTwoChessboards( "a1", "h3")) // false
console.log(checkTwoChessboards( "f4", "c7")) // true
console.log(checkTwoChessboards( "f5", "c7")) // false


