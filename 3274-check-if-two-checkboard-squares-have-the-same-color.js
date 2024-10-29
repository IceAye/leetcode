// ❓ DESCRIPTION:
// You are given two strings, coordinate1 and coordinate2, representing the coordinates of a square on an 8 x 8 chessboard.
// Return true if these two squares have the same color and false otherwise.
// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first (indicating its column), and the number second (indicating its row).
//
// ✅ SOLUTION:
let checkTwoChessboards = function(coordinate1, coordinate2) {
    const chess = "0abcdefgh";
    return (chess.indexOf(coordinate1[0]) + +coordinate1[1]) % 2 === (chess.indexOf(coordinate2[0]) + +coordinate2[1]) % 2;
};

// 📌 TESTCASE:
console.log(checkTwoChessboards("a1", "c3")) // true
console.log(checkTwoChessboards( "a1", "h3")) // false
console.log(checkTwoChessboards( "f4", "c7")) // true
console.log(checkTwoChessboards( "f5", "c7")) // false


