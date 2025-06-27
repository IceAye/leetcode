const countAsterisks = function (s) {
    return s.split("|").reduce((acc, curr, ind) => {
        if (ind % 2 === 0) {
            acc += (curr.match(/\*/g) || "").length;
        }
        return acc;
    }, 0);
};

console.log(countAsterisks("l|*e*et|c**o|*de|")) // 2
console.log(countAsterisks("iamprogrammer")) // 0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")) // 5