const reverseDegree = function(s) {
    return [...s].reduce((acc, curr, ind) => {
        acc += (curr.charCodeAt(0) - (71 + 2 * (curr.charCodeAt(0) - 97))) * (ind + 1);
        return acc;
    }, 0)
};

console.log(reverseDegree("abc")) // 148
console.log(reverseDegree("zaza")) // 160