let splitNum = function (num) {
    let array = [...num.toString()].sort();
    let [num1, num2] = array.reduce((acc, currentValue, currentIndex) => {
        acc[currentIndex % 2] += currentValue;
        return acc;
    }, ["", ""])
    return +num1 + +num2;
};

console.log(splitNum(4325)); // 59
console.log(splitNum(687)); // 75
console.log(splitNum(11)); // 2
