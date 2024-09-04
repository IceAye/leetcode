let getLucky = function (s, k) {
    let array = [];
    for (const char of s) {
        array.push(+(char.charCodeAt(0) - 96));
    }
    let number = Array.from(array.join("").split(""), Number);
    while (k > 0) {
        if (k === 1) {
            return number.reduce((sum, current) => sum + current);
        } else {
            number = Array.from(
                number
                    .reduce((sum, current) => sum + current)
                    .toString()
                    .split(""),
                Number,
            );
            k--;
        }
    }
    return number;
};

console.log(getLucky("iiii", 1));
console.log(getLucky("leetcode", 2));
console.log(getLucky("zbax", 2));
