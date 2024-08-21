let calPoints = function (operations) {
    let array = [];
    operations.map((item) =>
        item === "C"
            ? array.pop()
            : item === "D"
                ? array.push(array.at(-1) * 2)
                : item === "+"
                    ? array.push(array.at(-1) + array.at(-2))
                    : array.push(+item),
    );
    return array.reduce((sum, current) => sum + current, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
