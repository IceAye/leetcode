let canAliceWin = function (nums) {
    const alice = nums
        .filter((item) => item < 10)
        .reduce((sum, current) => sum + current);
    const bob = nums
        .filter((item) => item > 9)
        .reduce((sum, current) => sum + current, 0);
    return alice !== bob;
};

console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));
