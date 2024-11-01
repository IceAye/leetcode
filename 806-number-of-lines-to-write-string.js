let numberOfLines = function (widths, s) {
    let lines = 1;
    let chars = 0;
    for (let i = 0; i < s.length; i++) {
        chars += widths[s.charCodeAt(i) - 97];
        if (chars > 100) {
            lines++;
            chars = widths[s.charCodeAt(i) - 97];
        }
    }
    return [lines, chars]
};

console.log(
    numberOfLines(
        (widths = [
            10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            10, 10, 10, 10, 10, 10, 10, 10,
        ]),
        "abcdefghijklmnopqrstuvwxyz",
    ),
); // [3,60]
console.log(
    numberOfLines(
        [
            4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            10, 10, 10, 10, 10, 10, 10,
        ],
        "bbbcccdddaaa",
    ),
); // [2,4]