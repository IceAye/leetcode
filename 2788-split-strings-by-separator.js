let splitWordsBySeparator = function (words, separator) {
    return words.join(separator).split(separator).filter(Boolean);
};

console.log(
    splitWordsBySeparator(
        ["one.two.three", "four.five", "six"],
        (separator = "."),
    ),
);
console.log(splitWordsBySeparator(["$easy$", "$problem$"], (separator = "$")));
console.log(splitWordsBySeparator((words = ["|||"]), (separator = "|")));
