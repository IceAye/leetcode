// ❓ DESCRIPTION:
// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.
//
// ✅ SOLUTION:
let findRelativeRanks = function (score) {
    let sorted = score.toSorted((a, b) => b - a);
    return score.map((item) =>
        item === sorted[0]
            ? "Gold Medal"
            : item === sorted[1]
                ? "Silver Medal"
                : item === sorted[2]
                    ? "Bronze Medal"
                    : (sorted.indexOf(item) + 1).toString()
    );
};

// 📌 TESTCASE:
console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));