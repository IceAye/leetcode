let digitCount = function (num) {
    let array = Array.from(num, Number);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array.filter((item) => item === i).length) return false;
    }
    return true;
};

console.log(digitCount("1210"));
console.log(digitCount("030"));