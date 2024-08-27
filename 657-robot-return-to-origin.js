let judgeCircle = function (moves) {
    let horizontal = 0;
    let vertical = 0;

    for (const move of moves) {
        if (move === "U") vertical++;
        if (move === "D") vertical--;
        if (move === "R") horizontal++;
        if (move === "L") horizontal--;
    }
    return horizontal === 0 && vertical === 0;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));