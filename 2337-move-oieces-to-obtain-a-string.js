// ❓ DESCRIPTION:
// You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:
// The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
// The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
// Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.
//
// ✅ SOLUTION:

const canChange = function (start, target) {
    if (start.replace(/_/g, "") !== target.replace(/_/g, "")) return false;
    let i = 0; let j = 0; let n = start.length;
    while (i < start.length && j  < start.length) {
        while (start[i] === "_") i++;
        while (target[j] === "_") j++;
        if (i === n && j === n) return true;
        if (start[i] !== target[j]) return false;
        if (start[i] === "L") {
            if (j > i) return false;
        } else if (i > j) return false;
        i++;
        j++;
    }
    return true;
};

// 📌 TESTCASE:
console.log(canChange("_L__R__R_", "L______RR")) // true
console.log(canChange("R_L_", "__LR")) // false
console.log(canChange("_R", "R_")) // false
console.log(canChange("_LL___R__R_", "L___L____RR")) // false
console.log(canChange("RL_", "_RL")) // false


