let canAliceWin = function ( nums ) {
    let single = 0;
    let double = 0;
    for (const num of nums) {
        num < 10 ? single += num : double += num
    }
    return single !== double
};

console.log(canAliceWin([1 , 2 , 3 , 4 , 10]));
console.log(canAliceWin([1 , 2 , 3 , 4 , 5 , 14]));
console.log(canAliceWin([5 , 5 , 5 , 25]));
