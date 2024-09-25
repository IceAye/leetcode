let findRelativeRanks = function (score) {
    let sorted = score.toSorted((a, b) => b - a);
    return score.map((item, index) =>
        item === sorted[0]
            ? "Gold Medal"
            : item === sorted[1]
                ? "Silver Medal"
                : item === sorted[2]
                    ? "Bronze Medal"
                    : (sorted.indexOf(item) + 1).toString()
    );
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));