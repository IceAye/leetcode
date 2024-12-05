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

console.log(canChange("_L__R__R_", "L______RR")) // true
console.log(canChange("R_L_", "__LR")) // false
console.log(canChange("_R", "R_")) // false
console.log(canChange("_LL___R__R_", "L___L____RR")) // false
console.log(canChange("RL_", "_RL")) // false


